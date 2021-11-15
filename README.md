# Lab 8 - Starter

1. (first choice)Within a Github action that runs whenever code is pushed. It is important to test/debug in each step/push, not to test afterall. It makes the debug much easier and using GitHub actions makes the process much more organized, easier.
2. No, we would use Unit Test to check the functions (as part 2 of lab)
3. No, it is difficult to check is message feature using unit feature as it is interacting with other components as well. Also there will be many test cases.
4. Yes, we can test max message length function through unit test by simply see if input message is simply under 80 characters. E.G expect(isLengthUnder80(msg)).toBe(true)
