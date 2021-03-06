const { EmptyError } = require('errorify')

function validate(params) {
    params.forEach(({ key, value, type, optional }) => {
        switch (type) {
            case String:
                if (optional && value == null) break

                if (typeof value !== 'string') throw TypeError(`${value} is not a string`)

                if (!value.trim().length) throw new EmptyError(`${key} is empty or blank`)

                break
            case Boolean:
                if (optional && value == null) break

                if (typeof value !== 'boolean') throw TypeError(`${value} is not a boolean`)

                break
            case Number:
                if (optional && value == null) break

                if (typeof value !== 'number') throw TypeError(`${value} is not a number`)

                break
            case Date:
                if (optional && value == null) break

                if (!(value instanceof Date)) throw TypeError(`${value} is not a date`)

                break
            case Array:
                if (optional && value == null) break

                if (!(value instanceof Array)) throw TypeError(`${value} is not an array`)

                break
            case File:
                if (optional && value == null) break

                if (value.constructor !== File) throw TypeError(`${value} is not an object`)
        }
    })
}

module.exports = validate