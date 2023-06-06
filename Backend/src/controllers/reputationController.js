import Reputation from "../models/reputation.js";

exports.getReputation = async (req, res) => {
  try {
    const reputation = await Reputation.findByPk(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        reputation,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getAllReputations = async (req, res) => {
  try {
    const reputations = await Reputation.findAll();
    res.status(200).json({
      status: "success",
      results: reputations.length,
      data: {
        reputations,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.updateReputaion = async (req, res) => {
  //TODO: figure out how to update reputation.
  try {
    const reputation = await Reputation.update(req.body, {
      where: {
        reputationID: req.params.id,
      },
    });
    res.status(200).json({
      status: "success",
      data: {
        reputation,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};
