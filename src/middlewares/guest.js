
const guest = async (req, res, next) => {
    try {
        let query = req.query;
        if (!query.user || query.user != process.env.GUEST_ID) {
            return res.status(400).json({ message: 'Invalid guest ID' });
        }
        
        next();
    } catch (err) {
        res.status(401).json({ message: 'Something went wrong', error: err });
    }
}

module.exports = {
    guest
}
