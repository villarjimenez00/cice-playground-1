import { YesNoHttpRepository } from './yes-no-http-repository'
import { Http } from './http'
import { mock, when, instance, anyString } from 'ts-mockito'
import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { YesNoDto } from './yes-no-dto'
import { verify } from 'crypto'
import { YesNo } from '../domain/yes-no'

describe('yesno http repository', () => {
  it('should call http', async () => {
    const http: Http = mock(Http)
    const yesNoDtoToYesNoMapper: YesNoDtoToYesNoMapper = mock(YesNoDtoToYesNoMapper)
    const yesNoHttpRepository = new YesNoHttpRepository(
      instance(http),
      instance(yesNoDtoToYesNoMapper)
    )

    await yesNoHttpRepository.find()

    verify(http.get(anyString())).called()
  })

  it('should return YesNo mapped result', async () => {
    const http: Http = mock(Http)
    const yesNoDtoToYesNoMapper: YesNoDtoToYesNoMapper = mock(YesNoDtoToYesNoMapper)
    const yesNoDto: YesNoDto = {
      answer: 'yes',
      forced: false,
      image: 'img_url',
    }
    const yesNo: YesNo = { answer: 'yes', image: 'imageUrl' }
    when(http.get(anyString())).thenResolve(yesNoDto)
    when(yesNoDtoToYesNoMapper.map(yesNoDto)).thenReturn(yesNo)

    const yesNoHttpRepository = new YesNoHttpRepository(
      instance(http),
      instance(yesNoDtoToYesNoMapper)
    )

    const actual = await yesNoHttpRepository.find()

    expect(actual).toBe(yesNo)
  })
})
