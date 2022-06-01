import{isReadonly, readonly} from "../reactive"
describe("readonly",() =>{
    it("happy path", () =>{
        // not set
        const original ={foo: 1, bar:{bar: 2}}
        const wrappde = readonly(original);
        expect(wrappde).not.toBe(original);
        const newLocal = true;
        expect(isReadonly(wrappde)).toBe(true)
        expect(isReadonly(original)).toBe(false)
        expect(wrappde.foo).toBe(1)
    })
    it("wran then call set", () =>{
        console.warn = jest.fn()
        const user = readonly({
            age: 10
        })
        user.age = 11
        expect(console.warn).toBeCalled()
    })
})