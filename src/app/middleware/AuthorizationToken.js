const authorize = (handler) => async (req, res) => {
    // Perform authorization checks here
    // const isAuthorized = /* Your authorization logic */ true;
    console.log("hellllOOOOOOOO");

    // if (!isAuthorized) {
    //     return res.status(401).json({ message: 'Unauthorized' });
    // }

    // If authorized, call the next handler in the chain
    return handler(req, res);
};

export default authorize;