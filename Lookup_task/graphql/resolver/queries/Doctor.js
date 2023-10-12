const doctor = require("../../../schema/doctors")

const router = {
  Query: {
    doctorsData: async (_, {  }) => {
      let searchTerm = "Female";
      const regex = new RegExp(`^${searchTerm}`, "i");
      const doctorList = await doctor.aggregate([
        {
          $lookup: {
            from: 'patients',
            localField: 'id',
            foreignField: 'id',
            as: 'patientDetail'
          },
        },
        {
          $unwind: "$patientDetail"
        },
        {
          $match: {
            'patientDetail.status': { $regex: regex }
          }
        }
      ])
      return doctorList
    }
  }
}
module.exports = router

