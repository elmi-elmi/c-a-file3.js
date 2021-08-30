
const result = {
    name: 'shahrokh',
    f1: function () {
        console.log(this);
        const s = 'hi'
        const a = {
            // s: 'hi',
            fi2: () => {
                console.log(this);
            }

        }
        a.fi2()
    }
}
result.f1()