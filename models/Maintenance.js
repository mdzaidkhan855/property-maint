// models/Maintenance.js

import mongoose from 'mongoose';

const MaintenanceSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
  flat:String,
  // year: {
  //   type: Number,
  //   required: true,
  // },
  payments: [
    {
      year:String,
      January:String,
      February:String,
      March:String,
      April:String,
      May:String,
      June:String,
      July:String,
      August:String,
      September:String,
      October:String,
      November:String,
      December:String
    },
  ],
}, {
  timestamps: true,
});

export default mongoose.models.Maintenance || mongoose.model('Maintenance', MaintenanceSchema);
