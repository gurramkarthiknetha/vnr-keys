import mongoose from "mongoose";

const apiKeySchema = new mongoose.Schema(
  {
    keyId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    keyName: {
      type: String,
      required: true,
      trim: true,
    },
    apiKey: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      enum: [
        "Automobile",
        "Chemistry",
        "Civil",
        "CSE",
        "CSE-AIML&IOT",
        "CSE-(CyS,DS)_and_AI&DS",
        "EEE",
        "ECE",
        "EIE",
        "English",
        "IT",
        "Mathematics",
        "MECH",
        "Other",
        "Physics"
      ],
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    permissions: {
      read: {
        type: Boolean,
        default: true,
      },
      write: {
        type: Boolean,
        default: false,
      },
      delete: {
        type: Boolean,
        default: false,
      },
    },
    rateLimit: {
      requestsPerMinute: {
        type: Number,
        default: 100,
      },
      requestsPerHour: {
        type: Number,
        default: 1000,
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isStatic: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    lastUsed: {
      type: Date,
      default: null,
    },
    usageCount: {
      type: Number,
      default: 0,
    },
  },
  { 
    timestamps: true,
    collection: "apikeys"
  }
);

// Indexes for better performance
// Note: keyId and apiKey have unique: true so they automatically create indexes
apiKeySchema.index({ department: 1 });
apiKeySchema.index({ isActive: 1 });
apiKeySchema.index({ createdBy: 1 });

// Method to increment usage count
apiKeySchema.methods.recordUsage = function() {
  this.usageCount += 1;
  this.lastUsed = new Date();
  return this.save();
};

// Static method to find active keys
apiKeySchema.statics.findActive = function() {
  return this.find({ isActive: true });
};

// Static method to find keys by department
apiKeySchema.statics.findByDepartment = function(department) {
  return this.find({ department: department, isActive: true });
};

// Static method to find static keys
apiKeySchema.statics.findStatic = function() {
  return this.find({ isStatic: true, isActive: true });
};

export const ApiKey = mongoose.model("ApiKey", apiKeySchema);
