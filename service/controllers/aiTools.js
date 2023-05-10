const AiTool = require("../model/aiToolModel");
const { aiToolsData } = require("../Data/aiToolsData");

const getAllAITools = async (req, res, next) => {
  const { page = 1 } = req.query;
  const limit = 10;

  let aiTools;

  if (req.query.search) {
    const query = {};
    query.name = { $regex: req.query.search?.trim(), $options: "i" };

    aiTools = await AiTool.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
  }

  // if (!req.query.search) {
  //   console.log("Empty params executed");
  //   aiTools = await AiTool.find()
  //     .limit(limit * 1)
  //     .skip((page - 1) * limit)
  //     .exec();
  // }
  //  res.send(aiToolsData);

  res.status(200).json(aiToolsData);
};

const getAiToolById = async (req, res, next) => {
  console.log("getAiTool By ID called");
  const search_id = req.query.id;

  if (aiToolsData.length === 0) {
    return res.status(404).json({ message: "AI tool not found" });
  }

  function callBack(element) {
    return element.id === search_id;
  }

  const response = await aiToolsData.find(callBack);
  if (response !== undefined) {
    res.status(200).json(response)
  } else {
    res.send("Error:  ID does not exist")
  }

  console.log(response);

};

module.exports = { getAllAITools, getAiToolById };
