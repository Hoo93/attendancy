export const MIN_PASSWORD_LENGTH = 6
export const MAX_PASSWORD_LENGTH = 12
export const MIN_NAME_LENGTH = 3
export const MAX_NAME_LENGTH = 8
export const MIN_ID_LENGTH = 6
export const MAX_ID_LENGTH = 12
export const INVALID_NAME_LENGTH_ERROR_MESSAGE = `사용자 이름은 ${MIN_NAME_LENGTH} 이상 ${MAX_NAME_LENGTH} 이하 이어야 합니다`
export const INVALID_NAME_ERROR_MESSAGE = `사용자 이름은 한글,영어,숫자만 사용 가능합니다.`
export const INVALID_PASSWORD_LENGTH_ERROR_MESSAGE = `비밀번호 길이는 ${MIN_PASSWORD_LENGTH} 이상 ${MAX_PASSWORD_LENGTH} 이하 이어야 합니다`
export const INVALID_PASSWORD_ERROR_MESSAGE =
  '비밀번호는 영어,숫자,특수기호를 1개 이상 포함해야 합니다.'
export const INVALID_EMAIL_ERROR_MESSAGE = '이메일 주소가 유효하지 않습니다.'
export const INVALID_ID_ERROR_MESSAGE = `아이디는 ${MIN_ID_LENGTH} 이상, ${MAX_ID_LENGTH} 이하 이고 영어,숫자로 이루어져야 합니다.`
