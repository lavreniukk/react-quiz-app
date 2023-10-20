const responseMiddleware = (req, res, next) => {
    if (!res.statusCode) {
      next();
    }
    
    if (res.statusCode === 200) {
      return res.json({
        error: false,
        message: res.message,
        data: res.data
      });
    }
  
    return res.json({
      error: true,
      message: res.message
    });
  };
  
  export default responseMiddleware;