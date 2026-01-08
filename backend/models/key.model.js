import mongoose from "mongoose";

const keySchema = new mongoose.Schema(
  {
    keyNumber: {
      type: String,
      required: true,
      trim: true,
    },
    keyName: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    takenBy: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },
      name: {
        type: String,
        default: null,
      },
      email: {
        type: String,
        default: null,
      },
    },
    returnedBy: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
      },
      name: {
        type: String,
        default: null,
      },
      email: {
        type: String,
        default: null,
      },
    },
    takenAt: {
      type: Date,
      default: null,
    },
    returnedAt: {
      type: Date,
      default: null,
    },
    frequentlyUsed: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    category: {
      type: String,
      enum: ["classroom", "lab", "office", "storage", "library", "auditorium", "cafeteria", "hostel", "maintenance", "security", "staffroom", "other"],
      default: "other",
    },
    department: {
      type: String,
      enum: [
        "Accounts",
        "Admission",
        "Automobile",
        "CAMS",
        "Chemistry",
        "Civil",
        "CSE",
        "CSE-AIML&IOT",
        "CSE-(CyS,DS)_and_AI&DS",
        "Director",
        "EEE",
        "ECE",
        "EIE",
        "English",
        "GRO",
        "HR",
        "Humanity and sciences(H&S)",
        "IQAC",
        "IT",
        "Mathematics",
        "MECH",
        "Other",
        "PAAC",
        "Physics",
        "Placement",
        "Principal",
        "Purchase",
        "RCC",
        "SSC",
        "VJ_Hub"
      ],
      default: "Other", // Default to Other
    },
    block: {
      type: String,
      enum: ["A", "B", "C", "D", "E", "F", "G", "H", "P", "PG", "SAE", "MAIN", "LIB", "AUD", "CAF", "HOSTEL", "OTHER"],
      default: "A",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: "vnrkeys" // Explicitly specify the collection name
  }
);

// Indexes for better performance
keySchema.index({ status: 1 });
keySchema.index({ "takenBy.userId": 1 });
keySchema.index({ frequentlyUsed: 1 });
keySchema.index({ category: 1 });
keySchema.index({ department: 1 });
keySchema.index({ block: 1 });
keySchema.index({ isActive: 1 });

// Virtual for checking if key is currently taken
keySchema.virtual('isTaken').get(function() {
  return this.status === 'unavailable' && this.takenBy.userId;
});

// Method to take a key
keySchema.methods.takeKey = function(user) {
  this.status = 'unavailable';
  this.takenBy = {
    userId: user._id,
    name: user.name,
    email: user.email,
  };
  this.takenAt = new Date();
  this.returnedAt = null;
  return this.save();
};

// Method to return a key
keySchema.methods.returnKey = function(user) {
  this.status = 'available';
  this.returnedAt = new Date();
  this.returnedBy = {
    userId: user._id,
    name: user.name,
    email: user.email,
  };
  this.takenBy = {
    userId: null,
    name: null,
    email: null,
  };
  return this.save();
};

// Static method to find available keys
keySchema.statics.findAvailable = function() {
  return this.find({ status: 'available', isActive: true });
};

// Static method to find unavailable keys
keySchema.statics.findUnavailable = function() {
  return this.find({ status: 'unavailable', isActive: true });
};

// Static method to find keys taken by a specific user
keySchema.statics.findTakenByUser = function(userId) {
  return this.find({ 
    'takenBy.userId': userId, 
    status: 'unavailable',
    isActive: true 
  });
};

// Static method to find frequently used keys
keySchema.statics.findFrequentlyUsed = function() {
  return this.find({ frequentlyUsed: true, isActive: true });
};

// Static method to find keys accessible to a user based on their department
keySchema.statics.findAccessibleToUser = function(user) {
  const query = { isActive: true };

  // All authenticated users (admin, security, faculty) can see all keys
  return this.find(query);
};

// Static method to find available keys accessible to a user
keySchema.statics.findAvailableForUser = function(user) {
  const query = { status: 'available', isActive: true };

  // All authenticated users (admin, security, faculty) can see all available keys
  return this.find(query);
};

const Key = mongoose.model("Key", keySchema);
export default Key;
