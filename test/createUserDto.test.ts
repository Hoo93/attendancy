import {
  INVALID_EMAIL_ERROR_MESSAGE,
  INVALID_NAME_ERROR_MESSAGE,
  INVALID_NAME_LENGTH_ERROR_MESSAGE,
  INVALID_PASSWORD_ERROR_MESSAGE,
  INVALID_PASSWORD_LENGTH_ERROR_MESSAGE,
} from '../src/Auth/const'
import CreateUserDto from '../src/Auth/dto/create-user.dto'

describe('CreateUserDto 테스트', () => {
  const id = 'testID'
  const password = 'pwd'
  const name = '박상후'
  const age = 30
  const phoneNumber = '010-8098-1398'
  const email = 'sksk8922@gmail.com'

  let createUserDto: CreateUserDto
  beforeEach(() => {
    createUserDto = new CreateUserDto(id, name, password, phoneNumber, {
      age: age,
      email: email,
    })
  })

  it('생성자를 통해 Dto 생성', () => {
    const createUserDto = new CreateUserDto(
      'testID',
      'test',
      'pwd',
      '010-8098-1398',
      {
        age: 30,
        email: 'sksk8922@gmail.com',
      }
    )
    expect(createUserDto.name).toBe('test')
  })

  describe('validateId 테스트', () => {
    it('영어,숫자로 이루어진 경우 true 반환', () => {
      const properId = 'properId93'
      createUserDto.id = properId
      expect(createUserDto.validateId()).toBe(true)
    })

    it('영어,숫자로 이루어지지 않은 경우 false 반환', () => {
      const improperId = 'properId93!'
      createUserDto.id = improperId
      expect(createUserDto.validateId()).toBe(false)
    })

    it('길이가 5이하인 경우 false 반환', () => {
      const shortId = 'id123'
      createUserDto.id = shortId
      expect(createUserDto.validateId()).toBe(false)
    })

    it('길이가 12초과인 경우 false 반환', () => {
      const longId = 'improper12345'
      createUserDto.id = longId
      expect(createUserDto.validateId()).toBe(false)
    })
  })

  describe('validateNameLength 테스트', () => {
    it('이름이 두 글자 이하인 경우 false 반환', () => {
      const shortName = '상후'
      createUserDto.name = shortName
      expect(createUserDto.validateNameLength()).toBe(false)
    })

    it('이름이 8글자 초과인 경우 false 반환', () => {
      const longName = '이것은너무긴이름입니다.'
      createUserDto.name = longName
      expect(createUserDto.validateNameLength()).toBe(false)
    })

    it.each([
      ['적절한이름', true],
      ['짧음', false],
      ['이런이름은너무길지?', false],
    ])('이름이 %s인 경우 %p 반환', (name, expected) => {
      createUserDto.name = name
      expect(createUserDto.validateNameLength()).toBe(expected)
    })
  })

  describe('validateName 테스트', () => {
    it('한글,영어,숫자로 이루어진 name은 true를 반환한다.', () => {
      let username = '박상후'
      createUserDto.name = username
      expect(createUserDto.validateName()).toBe(true)
    })

    it('한글,영어,숫자로 이루어지지 않은 이름은 false를 반환한다.', () => {
      let username = '박상후 !'
      createUserDto.name = username
      expect(createUserDto.validateName()).toBe(false)
    })

    it.each([
      ['John123', true],
      ['한글이름', true],
      ['special!@#', false],
      ['   ', false],
      ['', false],
    ])('이름이 %s 인 경우 %p 반환', (name, expected) => {
      createUserDto.name = name
      const result = createUserDto.validateName()
      expect(result).toBe(expected)
    })
  })

  describe('validatePasswordLength 테스트', () => {
    it('6글자 미만 패스워드는 false를 반환합니다.', () => {
      let shortPassword = 'short'
      createUserDto.password = shortPassword
      expect(createUserDto.validatePasswordLength()).toBe(false)
    })

    it('12글자 초과 패스워드는 false를 반환합니다.', () => {
      let longPassword = 'twelve letter'
      createUserDto.password = longPassword
      expect(createUserDto.validatePasswordLength()).toBe(false)
    })

    it.each([
      ['short', false],
      ['too long password', false],
      ['appropriate', true],
      ['twelveLetter', true],
      ['letter', true],
    ])('글자수가 %s인 경우 %p를 반환', (password, expected) => {
      createUserDto.password = password
      expect(createUserDto.validatePasswordLength()).toBe(expected)
    })
  })

  describe('validatePassword 테스트', () => {
    it('영문,숫자,특수기호를 1개 이상 포함하지 않은 경우 false 반환', () => {
      let englishPassword = 'onlyEnglish'
      createUserDto.password = englishPassword
      expect(createUserDto.validatePassword()).toBe(false)
    })

    it('영문,숫자,특수기호를 1개 이상 포함한 경우 true 반환.', () => {
      let properPassword = 'proper123!'
      createUserDto.password = properPassword
      expect(createUserDto.validatePassword()).toBe(true)
    })

    it.each([
      ['한글비밀번호', false],
      ['onlyEnglish', false],
      ['한글비밀번호와123', false],
      ['english123', false],
      ['engAnd123##', true],
    ])('패스워드가 %s인 경우 %p 반환', (password, expected) => {
      createUserDto.password = password
      expect(createUserDto.validatePassword()).toBe(expected)
    })
  })

  describe('validateEmail 메소드 테스트', () => {
    it.each([
      ['sksk8922@gmail.com', true],
      ['thisIsFalse', false],
      ['sksk8922gmail.com', false],
      ['sksk8922@gmail', false],
      ['sksk8922@gmail.com2', false],
      ['hyphen-@naver.com', true],
    ])('이메일이 %s인 경우 %p 반환', (email, expected) => {
      createUserDto.email = email
      expect(createUserDto.validateEmail()).toBe(expected)
    })
  })

  describe('validatePhoneNumber 메소드 테스트', () => {
    it.each([
      ['010-8098-1398', true],
      ['011-8098-1398', true],
      ['011-267-3785', true],
      ['011-26-3785', false],
      ['011-267735', false],
      ['01080981398', false],
      ['011-no-string', false],
    ])('핸드폰번호가 %s인 경우 %p 반환', (phoneNumber, expected) => {
      createUserDto.phoneNumber = phoneNumber
      expect(createUserDto.validatePhoneNumber()).toBe(expected)
    })
  })

  describe('validate 메소드 테스트', () => {
    it.each([
      [
        'testID',
        '이름',
        'valid123!@#',
        '010-8098-1398',
        31,
        'email@email.com',
        INVALID_NAME_LENGTH_ERROR_MESSAGE,
      ],
      [
        'testID',
        '이름이 너무 길지 아니한가 !',
        'valid123!@#',
        '010-8098-1398',
        31,
        'email@email.com',
        INVALID_NAME_LENGTH_ERROR_MESSAGE,
      ],
      [
        'testID',
        '  !!3이름',
        'valid123!@#',
        '010-8098-1398',
        31,
        'email@email.com',
        INVALID_NAME_ERROR_MESSAGE,
      ],
      [
        'testID',
        '적절한이름',
        'short',
        '010-8098-1398',
        31,
        'email@email.com',
        INVALID_PASSWORD_LENGTH_ERROR_MESSAGE,
      ],
      [
        'testID',
        '적절한이름',
        'thisPasswordIsTooLong',
        '010-8098-1398',
        31,
        'email@email.com',
        INVALID_PASSWORD_LENGTH_ERROR_MESSAGE,
      ],
      [
        'testID',
        '적절한이름',
        'notSpecial3',
        '010-8098-1398',
        31,
        'email@email.com',
        INVALID_PASSWORD_ERROR_MESSAGE,
      ],
      [
        'testID',
        '적절한이름',
        '1proper@3',
        '010-8098-1398',
        31,
        'invalidmail',
        INVALID_EMAIL_ERROR_MESSAGE,
      ],
      [
        'testID',
        '적절한이름',
        '1proper@3',
        '010-8098-1398',
        31,
        'email@email.com',
        undefined,
      ],
    ])(
      '유효하지 않은 경우 Error를 발생시킵니다.',
      (id, name, password, phoneNumber, age, email, errorMessage) => {
        const createUserDto = new CreateUserDto(
          id,
          name,
          password,
          phoneNumber,
          {
            age: age,
            email: email,
          }
        )
        if (errorMessage) {
          expect(() => createUserDto.validate()).toThrowError(errorMessage)
        } else {
          expect(() => createUserDto.validate()).not.toThrow()
        }
      }
    )
  })
})
