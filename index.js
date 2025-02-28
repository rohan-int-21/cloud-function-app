exports.cloudFunctionHandler = (req, res) => {
    try {
      console.log("Received request:", req.method, req.url);
      
      // Extract 'name' from query parameters (if provided)
      const name = req.query.name || "Guest";
  
      // Simulate some processing (e.g., basic validation)
      if (name.length > 20) {
        throw new Error("Name is too long!");
      }
  
      // Log request headers for debugging
      console.log("Request Headers:", JSON.stringify(req.headers, null, 2));
  
      // Construct the response
      const response = {
        message: `Hello, ${name}! Your request was processed successfully.`,
        timestamp: new Date().toISOString(),
        requestMethod: req.method,
      };
  
      // Send JSON response
      res.status(200).json(response);
    } catch (error) {
      console.error("Error processing request:", error.message);
      res.status(400).json({ error: error.message });
    }
  };
  