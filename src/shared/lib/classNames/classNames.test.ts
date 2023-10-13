import { classNames } from './classNames'

describe('classnames', () => {
    test('with className param', () => {
        expect(classNames('classOne')).toBe('classOne')
    })

    test('with className and classes params', () => {
        const expected = 'classOne classTwo classThree'
        expect(classNames('classOne', ['classTwo', 'classThree'])).toBe(expected)
    })

    test('with className, classes and mods params', () => {
        const expected = 'classOne classTwo classThree classFour classFive'
        expect(
            classNames('classOne', ['classTwo', 'classThree'], {
                classFour: true,
                classFive: true
            })
        ).toBe(expected)
    })

    test('with className, classes and false mods params', () => {
        const expected = 'classOne classTwo classThree classFive'
        expect(
            classNames('classOne', ['classTwo', 'classThree'], {
                classFour: false,
                classFive: true
            })
        ).toBe(expected)
    })

    test('with className, classes and undefined mods params', () => {
        const expected = 'classOne classTwo classThree classFour'
        expect(
            classNames('classOne', ['classTwo', 'classThree'], {
                classFour: true,
                classFive: undefined
            })
        ).toBe(expected)
    })
})
