import {
  Model,
  BelongsTo,
  Increment,
  Boolean,
  Number,
  Attr,
  HasMany,
  HasOne,
  MorphOne,
  MorphMany,
  MorphTo,
  Attribute
} from "@vuex-orm/core";
import { keys, pullAll } from "lodash";

export default class BaseModel extends Model {
  static primaryKey = "_id";

  static fieldsKeys(): string[] {
    return keys(this.fields());
  }

  /**
   * 获取所有的关系型字段
   * @returns {Array<string>} all relations of the model
   */
  static relationFields(): string[] {
    return this.fieldsKeys().reduce((list: string[], field: string) => {
      let fieldAttribute: Attribute = this.fields()[field];
      if (this.isFieldRelation(fieldAttribute)) {
        list.push(`${field}_id`);
        list.push(field);
      }
      return list;
    }, []);
  }

  /**
   * 非关系型字段，同isFieldAttribute
   * @returns {Array<string>} fields which value are not BelongsTo
   */
  static nonRelationFields(): string[] {
    return pullAll(this.fieldsKeys(), this.relationFields());
  }

  /**
   * 关系型数据键值中包括_id的
   */

  static relationFieldsWithId(): string[] {
    return this.relationFields().filter(r => r.match(/.*_id/));
  }
  // 关系型数据键值中不包括_id的
  static nonRelationFieldsNoId(): string[] {
    return this.relationFields().filter(r => !r.match(/.*_id/));
  }

  static count(): number {
    return this.query().count();
  }

  /**
   * 判断某一字段是否为数字型
   *
   * @param {Attribute | undefined} field
   * @returns {boolean}
   */
  static isFieldNumber(field: Attribute): boolean {
    if (!field) return false;
    return field instanceof Number || field instanceof Increment;
  }

  /**
   * 判断某一字段是否为属性型(即不属于关系型)
   * @param {Attribute} field
   * @returns {boolean}
   */
  static isFieldAttribute(field: Attribute): boolean {
    return (
      field instanceof Increment ||
      field instanceof Attr ||
      field instanceof String ||
      field instanceof Number ||
      field instanceof Boolean
    );
  }
  /**
   * 判断某一字段是否为关系
   * @param {Attribute} field
   * @returns {boolean}
   */
  static isFieldRelation(field: Attribute): boolean {
    return (
      field instanceof BelongsTo ||
      field instanceof HasOne ||
      field instanceof HasMany ||
      field instanceof MorphTo ||
      field instanceof MorphOne ||
      field instanceof MorphMany
    );
  }

  /**
   * 如果是belongsTo/hasOne关系的外键, 需要忽略。
   *
   * @param {string} field
   * @returns {boolean}
   */
  skipField(field: string): boolean {
    let shouldSkipField: boolean = false;

    this.getRelations().forEach(relation => {
      if (
        (relation instanceof BelongsTo || relation instanceof HasOne) &&
        relation.foreignKey === field
      ) {
        shouldSkipField = true;
        return false;
      }
      return true;
    });

    return shouldSkipField;
  }

  /**
   * Returns a record of this model with the given ID.
   * @param {number} id
   * @returns {any}
   */
  getRecordWithId(id: number): any {
    return this.query()
      .withAllRecursive()
      .where("id", id)
      .first();
  }

  /**
   * Determines if we should eager load (means: add as a field in the graphql query) a related entity. belongsTo or
   * hasOne related entities are always eager loaded. Others can be added to the `eagerLoad` array of the model.
   *
   * @param {string} fieldName Name of the field
   * @param {Attribute} field Relation field
   * @param {Model} relatedModel Related model
   * @returns {boolean}
   */
  shouldEagerLoadRelation(
    fieldName: string,
    field: Attribute,
    relatedModel: Model
  ): boolean {
    if (
      field instanceof HasOne ||
      field instanceof BelongsTo ||
      field instanceof MorphOne
    ) {
      return true;
    }

    const eagerLoadList: Array<String> = this.eagerLoad || [];
    return (
      eagerLoadList.find(n => {
        return (
          n === relatedModel.singularName ||
          n === relatedModel.pluralName ||
          n === fieldName
        );
      }) !== undefined
    );
  }

  /**
   * 获取所有的关系型字段
   * @returns {Map<string, Attribute>} all relations of the model
   */
  getRelations(): Map<string, Attribute> {
    return this.fields().reduce(function(
      relations: Map<string, Attribute>,
      field: Attribute,
      name: string
    ) {
      if (!this.isFieldAttribute(field)) {
        relations.set(name, field);
      }
      return relations;
    },
    []);
  }
}
