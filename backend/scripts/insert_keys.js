import mongoose from 'mongoose';
import Key from '../models/key.model.js';
import dotenv from 'dotenv';

dotenv.config();

// Valid departments from the Key model schema
const VALID_DEPARTMENTS = [
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
  "MECH",
  "Other",
  "PAAC",
  "Placement",
  "Principal",
  "Purchase",
  "RCC",
  "SSC",
  "VJ_Hub"
];

/**
 * Normalizes department names to match the enum values or defaults to "Other"
 * @param {string} department - The department name to normalize
 * @returns {string} - Valid department name or "Other"
 */
const normalizeDepartment = (department) => {
  if (!department) return "Other";
  
  // Trim and handle spaces
  const trimmed = department.trim();
  
  // Check exact match (case-sensitive)
  if (VALID_DEPARTMENTS.includes(trimmed)) {
    return trimmed;
  }
  
  // Check case-insensitive match
  const caseInsensitiveMatch = VALID_DEPARTMENTS.find(
    dept => dept.toLowerCase() === trimmed.toLowerCase()
  );
  
  if (caseInsensitiveMatch) {
    return caseInsensitiveMatch;
  }
  
  // Common mappings for known variations
  const departmentMap = {
    'Physics': 'Other',
    'Mathematics': 'Humanity and sciences(H&S)',
    'Biochemistry': 'Other',
    'Library': 'Other',
    'Administration': 'Other',
    'RCC': 'RCC',
    'physics': 'Other',
    'maths': 'Other',
    'Math': 'Other',
    'H&S': 'Humanity and sciences(H&S)'
  };
  
  if (departmentMap[trimmed]) {
    return departmentMap[trimmed];
  }
  
  // Default to "Other" for unrecognized departments
  console.warn(`⚠️  Unknown department "${department}" - defaulting to "Other"`);
  return "Other";
};

const MkeysData = [
  {
    "keyNumber": "1",
    "keyName": ["B419"],
    "location": "Fourth Floor - Block B",
    "description": "Physics Classroom",
    "category": "classroom",
    "department": "Physics",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B418"],
    "location": "Fourth Floor - Block B",
    "description": "Physics Classroom",
    "category": "classroom",
    "department": "Physics",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C308"],
    "location": "Third Floor - Block C",
    "description": "Physics Classroom",
    "category": "classroom",
    "department": "Physics",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A314"],
    "location": "Third Floor - Block A",
    "description": "Physics Classroom",
    "category": "classroom",
    "department": "Physics",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },

  {
    "keyNumber": "1",
    "keyName": ["P119"],
    "location": "First Floor - Block P",
    "description": "RCC Office",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P303"],
    "location": "Third Floor - Block P",
    "description": "RCC Office",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P302"],
    "location": "Third Floor - Block P",
    "description": "RCC Office",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P301"],
    "location": "Third Floor - Block P",
    "description": "RCC Office",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P322"],
    "location": "Third Floor - Block P",
    "description": "RCC Office",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P325"],
    "location": "Third Floor - Block P",
    "description": "RCC Office",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },

  {
    "keyNumber": "1",
    "keyName": ["B120"],
    "location": "First Floor - Block B",
    "description": "GRO Office",
    "category": "other",
    "department": "Administration",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P310"],
    "location": "Third Floor - Block P",
    "description": "Students Dean Room",
    "category": "other",
    "department": "Administration",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E01"],
    "location": "Ground Floor - Block E",
    "description": "Central Library",
    "category": "library",
    "department": "Library",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C101"],
    "location": "First Floor - Block C",
    "description": "Central Library",
    "category": "library",
    "department": "Library",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B115"],
    "location": "First Floor - Block B",
    "description": "CAMS Office",
    "category": "CAMS",
    "department": "Administration",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B117"],
    "location": "First Floor - Block B",
    "description": "HR Office",
    "category": "other",
    "department": "Administration",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B118"],
    "location": "First Floor - Block B",
    "description": "PRAC Office",
    "category": "other",
    "department": "Administration",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B119"],
    "location": "First Floor - Block B",
    "description": "Accounts Office",
    "category": "other",
    "department": "Administration",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B401"],
    "location": "Fourth Floor - Block B",
    "description": "Biochemistry Room",
    "category": "other",
    "department": "Biochemistry",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B001"],
    "location": "Ground Floor - Block B",
    "description": "AO Office",
    "category": "other",
    "department": "Administration",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B106"],
    "location": "First Floor - Block B",
    "description": "Principal Room",
    "category": "other",
    "department": "Administration",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B102"],
    "location": "First Floor - Block B",
    "description": "Director Room",
    "category": "other",
    "department": "Administration",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },

  {
    "keyNumber": "1",
    "keyName": ["C310"],
    "location": "Third Floor - Block C",
    "description": "Mathematics Classroom",
    "category": "classroom",
    "department": "Mathematics",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C309"],
    "location": "Third Floor - Block C",
    "description": "Mathematics Classroom",
    "category": "classroom",
    "department": "Mathematics",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B013"],
    "location": "Ground Floor - Block B",
    "description": "Store Room",
    "category": "other",
    "department": "Administration",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  }
]; 

const keysData = [
  {
    "keyNumber": "1",
    "keyName": ["A117"],
    "block": "A",
    "location": "First Floor - Block A",
    "description": "English Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A118"],
    "block": "A",
    "location": "First Floor - Block A",
    "description": "English Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B002"],
    "block": "B",
    "location": "Ground Floor - Block B",
    "description": "Department Library",
    "category": "library",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B003"],
    "block": "B",
    "location": "Ground Floor - Block B",
    "description": "Head of Department",
    "category": "staffroom",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B1121"],
    "block": "B",
    "location": "First Floor - Block B",
    "description": "Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B1122"],
    "block": "B",
    "location": "First Floor - Block B",
    "description": "Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B403"],
    "block": "B",
    "location": "Fourth Floor - Block B",
    "description": "Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B405"],
    "block": "B",
    "location": "Fourth Floor - Block B",
    "description": "Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D502"],
    "block": "D",
    "location": "Fifth Floor - Block D",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D505"],
    "block": "D",
    "location": "Fifth Floor - Block D",
    "description": "Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D506"],
    "block": "D",
    "location": "Fifth Floor - Block D",
    "description": "Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D507"],
    "block": "D",
    "location": "Fifth Floor - Block D",
    "description": "Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D510"],
    "block": "D",
    "location": "Fifth Floor - Block D",
    "description": "Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P116"],
    "block": "PG",
    "location": "First Floor - Block PG",
    "description": "Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P313"],
    "block": "PG",
    "location": "Third Floor - Block PG",
    "description": "Research Center",
    "category": "other",
    "department": "English",
    "status": "available",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D400"],
    "location": "Fourth Floor - Block D",
    "description": "Department Library",
    "category": "library",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D401"],
    "location": "Fourth Floor - Block D",
    "description": "HoD Office",
    "category": "staffroom",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D402"],
    "location": "Fourth Floor - Block D",
    "description": "Automotive Chassis Laboratory",
    "category": "lab",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D403"],
    "location": "Fourth Floor - Block D",
    "description": "Internet of Things & Embedded Systems Laboratory",
    "category": "lab",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D405"],
    "location": "Fourth Floor - Block D",
    "description": "Theory of Machines & Automotive Electrical Electronics Laboratory",
    "category": "lab",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D406"],
    "location": "Fourth Floor - Block D",
    "description": "Faculty Room",
    "category": "staffroom",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D412"],
    "location": "Fourth Floor - Block D",
    "description": "CAD Laboratory",
    "category": "lab",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D413"],
    "location": "Fourth Floor - Block D",
    "description": "Classroom",
    "category": "classroom",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D414"],
    "location": "Fourth Floor - Block D",
    "description": "Classroom",
    "category": "classroom",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D415"],
    "location": "Fourth Floor - Block D",
    "description": "Classroom",
    "category": "classroom",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D416"],
    "location": "Fourth Floor - Block D",
    "description": "Research Lab / Project Lab",
    "category": "other",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D421"],
    "location": "Fourth Floor - Block D",
    "description": "Classroom",
    "category": "classroom",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D422"],
    "location": "Fourth Floor - Block D",
    "description": "Faculty Room",
    "category": "staffroom",
    "department": "Automobile",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P004", "P005", "P006"],
    "location": "Ground Floor - Block PG",
    "description": "Vehicle Maintenance and Testing Laboratory",
    "category": "lab",
    "department": "Automobile",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P007"],
    "location": "Ground Floor - Block PG",
    "description": "Automotive Engines Laboratory",
    "category": "lab",
    "department": "Automobile",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["SAESports"],
    "location": "Cellar Level - Below Sports Block",
    "description": "Society of Automotive Engineers Laboratory",
    "category": "lab",
    "department": "Automobile",
    "status": "available",
    "block": "SAE",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["ECellar"],
    "location": "Cellar Level - Block E",
    "description": "Volvo Eicher Commercial Vehicles Ltd. Laboratory",
    "category": "lab",
    "department": "Automobile",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["ECellar"],
    "location": "Cellar Level - Block E",
    "description": "Classroom – VECV",
    "category": "classroom",
    "department": "Automobile",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E018"],
    "location": "Ground Floor - Block E",
    "description": "Classroom – VECV",
    "category": "classroom",
    "department": "Automobile",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C201"],
    "location": "Second Floor - Block C",
    "description": "I Year Class Room",
    "category": "classroom",
    "department": "EIE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C202"],
    "location": "Second Floor - Block C",
    "description": "I Year Class Room",
    "category": "classroom",
    "department": "EIE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C203"],
    "location": "Second Floor - Block C",
    "description": "I Year Class Room",
    "category": "classroom",
    "department": "EIE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C204"],
    "location": "Second Floor - Block C",
    "description": "NI Academy Lab",
    "category": "lab",
    "department": "EIE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C205"],
    "location": "Second Floor - Block C",
    "description": "Microprocessors, Microcontrollers and Interfacing Lab / IoT Applications Lab",
    "category": "lab",
    "department": "EIE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C206"],
    "location": "Second Floor - Block C",
    "description": "Electronics and Measurements and IC Laboratory",
    "category": "lab",
    "department": "EIE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B217"],
    "location": "Second Floor - Block B",
    "description": "EIE Faculty Room",
    "category": "staffroom",
    "department": "EIE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B218"],
    "location": "Second Floor - Block B",
    "description": "EIE HOD Room",
    "category": "staffroom",
    "department": "EIE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B219"],
    "location": "Second Floor - Block B",
    "description": "EIE Faculty Room",
    "category": "staffroom",
    "department": "EIE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B220"],
    "location": "Second Floor - Block B",
    "description": "EIE Department Library",
    "category": "library",
    "department": "EIE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B206"],
    "location": "Second Floor - Block B",
    "description": "Sensors & Transducers Lab",
    "category": "lab",
    "department": "EIE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["B207"],
    "location": "Second Floor - Block B",
    "description": "Process Control Automation Laboratory",
    "category": "lab",
    "department": "EIE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["B208"],
    "location": "Second Floor - Block B",
    "description": "Analytical Instrumentation Laboratory",
    "category": "lab",
    "department": "EIE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["A213"],
    "location": "Second Floor - Block A",
    "description": "Process Control Instrumentation Laboratory",
    "category": "lab",
    "department": "EIE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["C301"],
    "location": "Third Floor - Block C",
    "description": "II Year Class Room",
    "category": "classroom",
    "department": "EIE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["C302"],
    "location": "Third Floor - Block C",
    "description": "II Year Class Room",
    "category": "classroom",
    "department": "EIE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["C303"],
    "location": "Third Floor - Block C",
    "description": "III Year Class Room",
    "category": "classroom",
    "department": "EIE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["C306"],
    "location": "Third Floor - Block C",
    "description": "III Year Class Room",
    "category": "classroom",
    "department": "EIE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["B322"],
    "location": "Third Floor - Block B",
    "description": "Robotics & Drones Centre of Excellence",
    "category": "other",
    "department": "EIE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["P302"],
    "location": "Second Floor - Block PG",
    "description": "Virtual Instrumentation Laboratory",
    "category": "lab",
    "department": "EIE",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["P305"],
    "location": "Second Floor - Block PG",
    "description": "M.Tech Class Room",
    "category": "classroom",
    "department": "EIE",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["P306"],
    "location": "Second Floor - Block PG",
    "description": "EIE Faculty Room",
    "category": "staffroom",
    "department": "EIE",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["P310"],
    "location": "Second Floor - Block PG",
    "description": "EIE Faculty Room",
    "category": "staffroom",
    "department": "EIE",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": true
  },
  {
    "keyNumber": "1",
    "keyName": ["B417"],
    "location": "Fourth Floor - Block B",
    "description": "Physics HOD Room",
    "category": "staffroom",
    "department": "Other",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B418"],
    "location": "Fourth Floor - Block B",
    "description": "Physics Staff Room",
    "category": "staffroom",
    "department": "Other",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C304"],
    "location": "Third Floor - Block C",
    "description": "Physics Laboratory",
    "category": "lab",
    "department": "Other",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C303"],
    "location": "Third Floor - Block C",
    "description": "Physics Laboratory",
    "category": "lab",
    "department": "Other",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C308"],
    "location": "Third Floor - Block C",
    "description": "Physics Laboratory",
    "category": "lab",
    "department": "Other",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B304"],
    "location": "Third Floor - Block B",
    "description": "Physics Laboratory",
    "category": "lab",
    "department": "Other",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P221"],
    "location": "Second Floor - Block PG",
    "description": "Physics Laboratory",
    "category": "lab",
    "department": "Other",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E201"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E202"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E203"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E215"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E216"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E217"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E220"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E221"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E224"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E225"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E230"],
    "location": "Second Floor - Block E",
    "description": "Laboratory",
    "category": "lab",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E231"],
    "location": "Second Floor - Block E",
    "description": "Laboratory",
    "category": "lab",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E234"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E235"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E236"],
    "location": "Second Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E301"],
    "location": "Third Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E302"],
    "location": "Third Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E303"],
    "location": "Third Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E306"],
    "location": "Third Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E320"],
    "location": "Third Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E321"],
    "location": "Third Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E324"],
    "location": "Third Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["E326"],
    "location": "Third Floor - Block E",
    "description": "Staff Room",
    "category": "staffroom",
    "department": "CSE-AIML&IOT",
    "status": "available",
    "block": "E",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B417"],
    "location": "Fourth Floor - Block B",
    "description": "Physics HOD Room",
    "category": "staffroom",
    "department": "Other",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B418"],
    "location": "Fourth Floor - Block B",
    "description": "Physics Staff Room",
    "category": "staffroom",
    "department": "Other",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C304"],
    "location": "Third Floor - Block C",
    "description": "Physics Laboratory",
    "category": "lab",
    "department": "Other",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C303"],
    "location": "Third Floor - Block C",
    "description": "Physics Laboratory",
    "category": "lab",
    "department": "Other",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C308"],
    "location": "Third Floor - Block C",
    "description": "Physics Laboratory",
    "category": "lab",
    "department": "Other",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B304"],
    "location": "Third Floor - Block B",
    "description": "Physics Laboratory",
    "category": "lab",
    "department": "Other",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P221"],
    "location": "Second Floor - Block PG",
    "description": "Physics Laboratory",
    "category": "lab",
    "department": "Other",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P303"],
    "location": "Third Floor - Block PG",
    "description": "English Staff Room",
    "category": "staffroom",
    "department": "English",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D510"],
    "location": "Fifth Floor - Block D",
    "description": "English Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D505"],
    "location": "Fifth Floor - Block D",
    "description": "English Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D506"],
    "location": "Fifth Floor - Block D",
    "description": "English Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D507"],
    "location": "Fifth Floor - Block D",
    "description": "English Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B403"],
    "location": "Fourth Floor - Block B",
    "description": "English Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B405"],
    "location": "Fourth Floor - Block B",
    "description": "English Laboratory",
    "category": "lab",
    "department": "English",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B319"],
    "location": "Third Floor - Block B",
    "description": "Chemistry HOD Cabin",
    "category": "staffroom",
    "department": "Chemistry",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B318"],
    "location": "Third Floor - Block B",
    "description": "Chemistry Other Room",
    "category": "other",
    "department": "Chemistry",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B320"],
    "location": "Third Floor - Block B",
    "description": "Chemistry Staff Room",
    "category": "staffroom",
    "department": "Chemistry",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C309"],
    "location": "Third Floor - Block C",
    "description": "Chemistry Staff Room",
    "category": "staffroom",
    "department": "Chemistry",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C209"],
    "location": "Second Floor - Block C",
    "description": "Chemistry Staff Room",
    "category": "staffroom",
    "department": "Chemistry",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B308"],
    "location": "Third Floor - Block B",
    "description": "Chemistry Laboratory",
    "category": "lab",
    "department": "Chemistry",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B309"],
    "location": "Third Floor - Block B",
    "description": "Chemistry Laboratory",
    "category": "lab",
    "department": "Chemistry",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C313"],
    "location": "Third Floor - Block C",
    "description": "Chemistry Laboratory",
    "category": "lab",
    "department": "Chemistry",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P320"],
    "location": "Third Floor - Block PG",
    "description": "Chemistry Laboratory",
    "category": "lab",
    "department": "Chemistry",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B419"],
    "location": "Fourth Floor - Block B",
    "description": "Mathematics Staff Room",
    "category": "staffroom",
    "department": "Other",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B420"],
    "location": "Fourth Floor - Block B",
    "description": "Mathematics Staff Room",
    "category": "staffroom",
    "department": "Other",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C310"],
    "location": "Third Floor - Block C",
    "description": "Mathematics Staff Room",
    "category": "staffroom",
    "department": "Other",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P303"],
    "location": "Third Floor - Block PG",
    "description": "Mathematics Staff Room",
    "category": "staffroom",
    "department": "Other",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D301"],
    "location": "Third Floor - Block D",
    "description": "MECH HOD Office",
    "category": "staffroom",
    "department": "MECH",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D305"],
    "location": "Third Floor - Block D",
    "description": "P.T. Laboratory",
    "category": "lab",
    "department": "MECH",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D306"],
    "location": "Third Floor - Block D",
    "description": "MECH Staff Room",
    "category": "staffroom",
    "department": "MECH",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D312"],
    "location": "Third Floor - Block D",
    "description": "P.D.P. Laboratory",
    "category": "lab",
    "department": "MECH",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D320"],
    "location": "Third Floor - Block D",
    "description": "UG CAD Laboratory",
    "category": "lab",
    "department": "MECH",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D319"],
    "location": "Third Floor - Block D",
    "description": "EG Laboratory",
    "category": "lab",
    "department": "MECH",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D318"],
    "location": "Third Floor - Block D",
    "description": "HT Laboratory",
    "category": "lab",
    "department": "MECH",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D316"],
    "location": "Third Floor - Block D",
    "description": "MMS Laboratory",
    "category": "lab",
    "department": "MECH",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D418"],
    "location": "Fourth Floor - Block D",
    "description": "A&R Laboratory",
    "category": "lab",
    "department": "MECH",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D419"],
    "location": "Fourth Floor - Block D",
    "description": "CAM Laboratory",
    "category": "lab",
    "department": "MECH",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D420"],
    "location": "Fourth Floor - Block D",
    "description": "Composite Laboratory",
    "category": "lab",
    "department": "MECH",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P119"],
    "location": "First Floor - Block PG",
    "description": "RCC Room",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P309"],
    "location": "Third Floor - Block PG",
    "description": "RCC Room",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P321"],
    "location": "Third Floor - Block PG",
    "description": "RCC Room",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P322"],
    "location": "Third Floor - Block PG",
    "description": "RCC Room",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P303"],
    "location": "Third Floor - Block PG",
    "description": "RCC Room",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P301"],
    "location": "Third Floor - Block PG",
    "description": "RCC Room",
    "category": "other",
    "department": "RCC",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["D519"],
    "location": "Fifth Floor - Block D",
    "description": "Admission Branch",
    "category": "other",
    "department": "Admission",
    "status": "available",
    "block": "D",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P409"],
    "location": "Fourth Floor - Block PG",
    "description": "VJ Hub",
    "category": "other",
    "department": "VJ Hub",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P407"],
    "location": "Fourth Floor - Block PG",
    "description": "VJ Hub",
    "category": "other",
    "department": "VJ Hub",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P405"],
    "location": "Fourth Floor - Block PG",
    "description": "VJ Hub",
    "category": "other",
    "department": "VJ Hub",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B120"],
    "location": "First Floor - Block B",
    "description": "GRO Office",
    "category": "other",
    "department": "GRO",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B221"],
    "location": "Second Floor - Block B",
    "description": "IQAC Office",
    "category": "other",
    "department": "IQAC",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A003"],
    "location": "Ground Floor - Block A",
    "description": "SSC Office",
    "category": "other",
    "department": "SSC",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P414"],
    "location": "Fourth Floor - Block PG",
    "description": "Placement Room",
    "category": "other",
    "department": "Placement",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B115"],
    "location": "First Floor - Block B",
    "description": "CAMS Office",
    "category": "other",
    "department": "CAMS",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B117"],
    "location": "First Floor - Block B",
    "description": "HR Office",
    "category": "other",
    "department": "HR",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B118"],
    "location": "First Floor - Block B",
    "description": "PAAC Office",
    "category": "other",
    "department": "PAAC",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B119"],
    "location": "First Floor - Block B",
    "description": "Accounts Office",
    "category": "other",
    "department": "Accounts",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B106"],
    "location": "First Floor - Block B",
    "description": "Principal Office",
    "category": "other",
    "department": "Principal",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B102"],
    "location": "First Floor - Block B",
    "description": "Director Office",
    "category": "other",
    "department": "Director",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P002"],
    "location": "Ground Floor - Block PG",
    "description": "Purchase Department",
    "category": "other",
    "department": "Purchase",
    "status": "available",
    "block": "PG",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B004"],
    "location": "Ground Floor - Block B",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B005"],
    "location": "Ground Floor - Block B",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B322"],
    "location": "Third Floor - Block B",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A306"],
    "location": "Third Floor - Block A",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A307"],
    "location": "Third Floor - Block A",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A308"],
    "location": "Third Floor - Block A",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A309"],
    "location": "Third Floor - Block A",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A310"],
    "location": "Third Floor - Block A",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A313"],
    "location": "Third Floor - Block A",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P203"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P204"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P206"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P207"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P208"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P209"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P211"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P212"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P216"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P217"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P219"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P222"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P223"],
    "location": "Second Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P014"],
    "location": "Ground Floor - Block P",
    "description": "EEE Laboratory",
    "category": "lab",
    "department": "EEE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },

  {
    "keyNumber": "1",
    "keyName": ["B301"],
    "location": "Third Floor - Block B",
    "description": "EEE Staff Room",
    "category": "staffroom",
    "department": "EEE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B302"],
    "location": "Third Floor - Block B",
    "description": "EEE Staff Room",
    "category": "staffroom",
    "department": "EEE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B303"],
    "location": "Third Floor - Block B",
    "description": "EEE Staff Room",
    "category": "staffroom",
    "department": "EEE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B305"],
    "location": "Third Floor - Block B",
    "description": "EEE Staff Room",
    "category": "staffroom",
    "department": "EEE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B201"],
    "location": "Second Floor - Block B",
    "description": "ECE Discussion Room",
    "category": "other",
    "department": "ECE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B202"],
    "location": "Second Floor - Block B",
    "description": "ECE Staff Room",
    "category": "staffroom",
    "department": "ECE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B203"],
    "location": "Second Floor - Block B",
    "description": "ECE Staff Room",
    "category": "staffroom",
    "department": "ECE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B204"],
    "location": "Second Floor - Block B",
    "description": "ECE Staff Room",
    "category": "staffroom",
    "department": "ECE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["B205"],
    "location": "Second Floor - Block B",
    "description": "ECE Staff Room",
    "category": "staffroom",
    "department": "ECE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },

  {
    "keyNumber": "1",
    "keyName": ["B222"],
    "location": "Second Floor - Block B",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "B",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A202"],
    "location": "Second Floor - Block A",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A203"],
    "location": "Second Floor - Block A",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A206"],
    "location": "Second Floor - Block A",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A207"],
    "location": "Second Floor - Block A",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A208"],
    "location": "Second Floor - Block A",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A209"],
    "location": "Second Floor - Block A",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["A212"],
    "location": "Second Floor - Block A",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "A",
    "frequentlyUsed": false
  },

  {
    "keyNumber": "1",
    "keyName": ["P101"],
    "location": "First Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P1021"],
    "location": "First Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P103"],
    "location": "First Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P104"],
    "location": "First Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P105"],
    "location": "First Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P106"],
    "location": "First Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P109"],
    "location": "First Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P111"],
    "location": "First Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P112"],
    "location": "First Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P202"],
    "location": "Second Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P301"],
    "location": "Third Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["P310"],
    "location": "Third Floor - Block P",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "P",
    "frequentlyUsed": false
  },

  {
    "keyNumber": "1",
    "keyName": ["C207"],
    "location": "Second Floor - Block C",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
  {
    "keyNumber": "1",
    "keyName": ["C208"],
    "location": "Second Floor - Block C",
    "description": "ECE Laboratory",
    "category": "lab",
    "department": "ECE",
    "status": "available",
    "block": "C",
    "frequentlyUsed": false
  },
];

// Connect to MongoDB and insert keys
const insertKeys = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Transform keysData to have unique keyNumbers
    const updatedKeysData = keysData.map(item => {
      return {
        ...item,
        // Join array elements with "/", or return the single element as a string
        keyNumber: Array.isArray(item.keyName) ? item.keyName.join('/') : item.keyName
      };
    });

    // Prepare keys for insertion
    const keysToInsert = [];

    // console.log('Available Departments:');
    // console.log(Array.from(getDepartments()).sort());
    // return;
    
    updatedKeysData.forEach((keyData) => {
      // Handle keyName array - create separate document for each key
      const keyNames = Array.isArray(keyData.keyName) ? keyData.keyName : [keyData.keyName];
      
      keyNames.forEach((keyName) => {
        keysToInsert.push({
          keyNumber: keyData.keyNumber,
          keyName: keyName,
          location: keyData.location,
          description: keyData.description || '',
          category: keyData.category,
          // department: normalizeDepartment(keyData.department),
          department: keyData.department.replace(/ /g, '_'),
          status: keyData.status || 'available',
          block: keyData.block,
          frequentlyUsed: keyData.frequentlyUsed || false,
          isActive: true
        });
      });
    });

    // Upsert keys (insert if not exists, update if exists)
    let insertedCount = 0;
    let updatedCount = 0;
    let errorCount = 0;
    const insertedByDept = {};
    const updatedByDept = {};
    const errorByDept = {};

    for (const keyData of keysToInsert) {
      try {
        // Use findOneAndUpdate with upsert option
        const result = await Key.findOneAndUpdate(
          { keyName: keyData.keyName },  // Filter: find by keyName
          keyData,                        // Update: use the keyData
          { 
            new: true,                   // Return the updated document
            upsert: true                 // Insert if doesn't exist
          }
        );

        // Check if this was a new insert or an update
        if (result.createdAt === result.updatedAt || result.updatedAt <= new Date(result.createdAt.getTime() + 1000)) {
          // This is a new document (inserted)
          console.log(`✅ Inserted: ${keyData.keyName} (${keyData.department})`);
          insertedCount++;
          insertedByDept[keyData.department] = (insertedByDept[keyData.department] || 0) + 1;
        } else {
          // This is an existing document (updated)
          console.log(`🔄 Updated: ${keyData.keyName} (${keyData.department})`);
          updatedCount++;
          updatedByDept[keyData.department] = (updatedByDept[keyData.department] || 0) + 1;
        }
      } catch (error) {
        console.error(`❌ Error inserting ${keyData.keyName}: ${error.message}`);
        errorCount++;
        errorByDept[keyData.department] = (errorByDept[keyData.department] || 0) + 1;
      }
    }

    // Display summary
    console.log("\n" + "=".repeat(50));
    console.log("📊 INSERTION SUMMARY");
    console.log("=".repeat(50));
    console.log(`✅ Inserted: ${insertedCount}`);
    console.log(`🔄 Updated: ${updatedCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`📝 Total processed: ${keysToInsert.length}`);
    
    if (Object.keys(insertedByDept).length > 0) {
      console.log("\n✅ Inserted by department:");
      Object.entries(insertedByDept).sort().forEach(([dept, count]) => {
        console.log(`  ${dept}: ${count}`);
      });
    }

    if (Object.keys(updatedByDept).length > 0) {
      console.log("\n🔄 Updated by department:");
      Object.entries(updatedByDept).sort().forEach(([dept, count]) => {
        console.log(`  ${dept}: ${count}`);
      });
    }

    if (Object.keys(errorByDept).length > 0) {
      console.log("\n❌ Errors by department:");
      Object.entries(errorByDept).sort().forEach(([dept, count]) => {
        console.log(`  ${dept}: ${count}`);
      });
    }
    console.log("=".repeat(50));

  } catch (error) {
    console.error('Error inserting keys:', error);
  } finally {
    // Close the connection
    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
  }
};

const getDepartments = () => {
  return new Set(keysData.map(key => key.department));
};

// Run the script
insertKeys();
