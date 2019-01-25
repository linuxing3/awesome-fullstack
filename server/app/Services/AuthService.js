
class AuthorizationService {
  verifyPermission( resourse, user ) {
    if (resourse.user_id !== user.id) {
      throw new Error();
    }

  }
}