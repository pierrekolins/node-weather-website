const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=dce4c8ffe102f4b20d77f1a305e1259a&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Location not found!', undefined)
        } else {
            const clima = body.current
            callback(undefined,
                clima.weather_descriptions[0] +
                ". It is currently " + clima.temperature +
                " degrees out. It feels like " + clima.feelslike +
                " degrees out. The humidity is " + clima.humidity + "%."
            )
        }
    })
}

module.exports = forecast