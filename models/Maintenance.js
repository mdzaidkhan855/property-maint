// models/Maintenance.js

import mongoose from 'mongoose';

const MaintenanceSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
  flat:String,
  year: {
    type: Number,
    required: true,
  },
  payments: [
    {
      month: {
        type: String,
        enum: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ],
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        enum: ['paid', 'pending'],
        default: 'pending',
      }
    },
  ],
}, {
  timestamps: true,
});

export default mongoose.models.Maintenance || mongoose.model('Maintenance', MaintenanceSchema);
