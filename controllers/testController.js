const testController = (req, res) => {
    res.status(200).send({
        Message: "Welcome user",
        success: "true",
    });
}

module.exports = { testController };
