import { merge, common, distinct } from './ArrayUtil'
import { expect } from 'chai';

describe('ArrayUtil', () => {

    describe('merge', () => {

        it('should merge empty arrays', () => {
            let array1: string[] = []
            let array2: string[] = []
            let result = merge(array1, array2)
            expect(result).to.deep.equals([])
        })

        it('should merge if first array empty', () => {
            let array1: string[] = []
            let array2: string[] = ['v2']
            let result = merge(array1, array2)
            expect(result).to.deep.equals(['v2'])
        })

        it('should merge if second array empty', () => {
            let array1: string[] = ['v1']
            let array2: string[] = []
            let result = merge(array1, array2)
            expect(result).to.deep.equals(['v1'])
        })

        it('should merge distinct arrays', () => {
            let array1: string[] = ['v1']
            let array2: string[] = ['v2']
            let result = merge(array1, array2)
            expect(result).to.deep.equals(['v1', 'v2'])
        })

        it('should merge arrays with common values', () => {
            let array1: string[] = ['v1', 'v2', 'v3']
            let array2: string[] = ['v2', 'v4']
            let result = merge(array1, array2)
            expect(result).to.deep.equals(['v1', 'v2', 'v3', 'v4'])
        })

    })

    describe('common', () => {

        it('should common empty arrays', () => {
            let array1: string[] = []
            let array2: string[] = []
            let result = common(array1, array2)
            expect(result).to.deep.equals([])
        })

        it('should common if first array empty', () => {
            let array1: string[] = []
            let array2: string[] = ['v2']
            let result = common(array1, array2)
            expect(result).to.deep.equals([])
        })

        it('should common if second array empty', () => {
            let array1: string[] = ['v1']
            let array2: string[] = []
            let result = common(array1, array2)
            expect(result).to.deep.equals([])
        })

        it('should common distinct arrays', () => {
            let array1: string[] = ['v1']
            let array2: string[] = ['v2']
            let result = common(array1, array2)
            expect(result).to.deep.equals([])
        })

        it('should common arrays with common values', () => {
            let array1: string[] = ['v1', 'v2', 'v3']
            let array2: string[] = ['v2', 'v4']
            let result = common(array1, array2)
            expect(result).to.deep.equals(['v2'])
        })

    })

    describe('distinct', () => {

        it('should distinct empty arrays', () => {
            let array1: string[] = []
            let array2: string[] = []
            let result = distinct(array1, array2)
            expect(result).to.deep.equals([])
        })

        it('should distinct if first array empty', () => {
            let array1: string[] = []
            let array2: string[] = ['v2']
            let result = distinct(array1, array2)
            expect(result).to.deep.equals(['v2'])
        })

        it('should distinct if second array empty', () => {
            let array1: string[] = ['v1']
            let array2: string[] = []
            let result = distinct(array1, array2)
            expect(result).to.deep.equals(['v1'])
        })

        it('should distinct distinct arrays', () => {
            let array1: string[] = ['v1']
            let array2: string[] = ['v2']
            let result = distinct(array1, array2)
            expect(result).to.deep.equals(['v1', 'v2'])
        })

        it('should distinct arrays with common values', () => {
            let array1: string[] = ['v1', 'v2', 'v3']
            let array2: string[] = ['v2', 'v4']
            let result = distinct(array1, array2)
            expect(result).to.deep.equals(['v1', 'v3', 'v4'])
        })

    })

})