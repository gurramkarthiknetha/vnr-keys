import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user.model.js";
import { connectDB } from "../db/connectDB.js";

dotenv.config();

const facutlyData = [
  {
    "email": "23071a7251@vnrvjiet.in",
    "name": "Bhvais",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "bahvsi123"
  },
  {
    "email": "rajaravikumar_bv@vnrvjiet.in",
    "name": "Dr. B. V. R. Ravi Kumar",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "78150404-162446"
  },
  {
    "email": "chennakesavarao_b@vnrvjiet.in",
    "name": "Dr. B. Chennakesava Rao",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "0387-171025-174106"
  },
  {
    "email": "psprasad@vnrvjiet.in",
    "name": "Dr. P. S. Prasad",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "0429-150420-110211"
  },
  {
    "email": "srinivasagupta_g@vnrvjiet.in",
    "name": "Dr. G. Srinivasa Gupta",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "94150402-115132"
  },
  {
    "email": "prasad_mvrd@vnrvjiet.in",
    "name": "Dr. M. V. R. Durga Prasad",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "2867-150408-181929"
  },
  {
    "email": "raghubabu_g@vnrvjiet.in",
    "name": "Dr. G. Raghu Babu",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "4814-160217-165341"
  },
  {
    "email": "balashowry_k@vnrvjiet.in",
    "name": "Dr. K. Balashowry",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "8928-150414-150927"
  },
  {
    "email": "venkataramana_e@vnrvjiet.in",
    "name": "Dr. E. V. Ramana",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "2315-150407-224158"
  },
  {
    "email": "shivrajyeole@vnrvjiet.in",
    "name": "Dr. Y. Shivraj Narayan",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "63150328-184136"
  },
  {
    "email": "satyanarayana_b@vnrvjiet.in",
    "name": "Dr. B. Satyanarayana",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "30150401-172054"
  },
  {
    "email": "ajaykumar_k@vnrvjiet.in",
    "name": "Dr. K. Ajay Kumar",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "0962-160105-143546"
  },
  {
    "email": "somayajulu_sr@vnrvjiet.in",
    "name": "Sri. S. R. Somayajulu",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "0136-150409-155454"
  },
  {
    "email": "kirankumar_n@vnrvjiet.in",
    "name": "Dr. N. Kiran Kumar",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "7016-161024-152425"
  },
  {
    "email": "jayaprakash_k@vnrvjiet.in",
    "name": "Dr. K. Jaya Prakash",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "27150331-222623"
  },
  {
    "email": "jayashri@vnrvjiet.in",
    "name": "Dr. Jayashri Nair",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "82150331-140824"
  },
  {
    "email": "arunaprabha_k@vnrvjiet.in",
    "name": "Dr. K. Aruna Prabha",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "28150402-170250"
  },
  {
    "email": "srinivasarao_ms@vnrvjiet.in",
    "name": "Dr. M. S. Srinivasa Rao",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "97150402-161629"
  },
  {
    "email": "sarathchandra_d@vnrvjiet.in",
    "name": "Dr. D. Sarath Chandra",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "98150401-131028"
  },
  {
    "email": "sahithi_vvd@vnrvjiet.in",
    "name": "Dr. V. V. Durga Sahithi",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "98150402-111102"
  },
  {
    "email": "srilatha_n@vnrvjiet.in",
    "name": "Dr. N. Srilatha",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "35150402-094013"
  },
  {
    "email": "krishnamurthy_k@vnrvjiet.in",
    "name": "Dr. K. Krishna Murthy",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "5222-150429-155953"
  },
  {
    "email": "prasadkumar_p@vnrvjiet.in",
    "name": "Sri. P. Prasad Kumar",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "7889-150623-143937"
  },
  {
    "email": "bhanumurthy_s@vnrvjiet.in",
    "name": "Dr. S. Bhanu Murthy",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "1462-160127-101952"
  },
  {
    "email": "sandeepraj_l@vnrvjiet.in",
    "name": "Dr. L. Sandeep Raj",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "1905-151218-094538"
  },
  {
    "email": "naresh_h@vnrvjiet.in",
    "name": "Dr. H. Naresh",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "4606-160315-093029"
  },
  {
    "email": "pnarendra_poly@vnrvjiet.in",
    "name": "Sri. P. Narendra",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "4960-150409-175341"
  },
  {
    "email": "saihari_sns@vnrvjiet.in",
    "name": "Sri. S. N. S. Sai Hari",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "92150330-123607"
  },
  {
    "email": "priyadarsini_ch@vnrvjiet.in",
    "name": "Dr. CH. Priya Darsini",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "69150404-125508"
  },
  {
    "email": "swetha_s@vnrvjiet.in",
    "name": "Smt. S. Swetha",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "0488-161026-105046"
  },
  {
    "email": "sivaramakrishna_v@vnrvjiet.in",
    "name": "Dr. V. Siva Rama Krishna",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "61150406-170248"
  },
  {
    "email": "malyadri_t@vnrvjiet.in",
    "name": "Sri. T. Malyadri",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "46150404-141230"
  },
  {
    "email": "naveenreddy_ch@vnrvjiet.in",
    "name": "Dr. CH. Naveen Reddy",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "3702-160307-012243"
  },
  {
    "email": "rajeswari_ch@vnrvjiet.in",
    "name": "Smt. CH. Rajeswari",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "9488-150410-141152"
  },
  {
    "email": "vsatyaprasad_s@vnrvjiet.in",
    "name": "Dr. S. V. Satya Prasad",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "8633-230323-170632"
  },
  {
    "email": "vsubhash_g@vnrvjiet.in",
    "name": "Dr. G. V. Subhash",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "4121-230323-171149"
  },
  {
    "email": "shivakumar_n@vnrvjiet.in",
    "name": "Dr. N. Shiva Kumar",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "6665-210129-122501"
  },
  {
    "email": "sujith_b@vnrvjiet.in",
    "name": "Dr. Sujith Bobba",
    "role": "faculty",
    "department": "MECH",
    "facultyId": "9360-240209-102108"
  },
  {
    "email": "ithead@vnrvjiet.in",
    "name": "Dr.N Mangathayaru",
    "role": "faculty",
    "department": "IT",
    "facultyId": "52150407-152647"
  },
  {
    "email": "sureshreddy_g@vnrvjiet.in",
    "name": "Dr.G Suresh Reddy",
    "role": "faculty",
    "department": "IT",
    "facultyId": "53150407-173532"
  },
  {
    "email": "madhu_g@vnrvjiet.in",
    "name": "Dr.G Madhu",
    "role": "faculty",
    "department": "IT",
    "facultyId": "16150406-123557"
  },
  {
    "email": "srinivasarao_d@vnrvjiet.in",
    "name": "Dr.D.Srinivasa Rao",
    "role": "faculty",
    "department": "IT",
    "facultyId": "55150404-164801"
  },
  {
    "email": "jalender_b@vnrvjiet.in",
    "name": "Dr.B.Jalender",
    "role": "faculty",
    "department": "IT",
    "facultyId": "3119-150408-102555"
  },
  {
    "email": "mathurabai_b@vnrvjiet.in",
    "name": "Dr.B.Mathura Bai",
    "role": "faculty",
    "department": "IT",
    "facultyId": "7525-150409-131915"
  },
  {
    "email": "seshukumari_bv@vnrvjiet.in",
    "name": "Dr.B.Venkata Seshu Kumari",
    "role": "faculty",
    "department": "IT",
    "facultyId": "78150407-162814"
  },
  {
    "email": "rajeshkumar_g@vnrvjiet.in",
    "name": "Dr.Gunupudi Rajesh Kumar",
    "role": "faculty",
    "department": "IT",
    "facultyId": "16150406-161926"
  },
  {
    "email": "radhakrishna_v@vnrvjiet.in",
    "name": "Dr.V.Radhakrishna",
    "role": "faculty",
    "department": "IT",
    "facultyId": "4481-150413-002634"
  },
  {
    "email": "nchandrika_g@vnrvjiet.in",
    "name": "Dr.G Naga Chandrika",
    "role": "faculty",
    "department": "IT",
    "facultyId": "00150404-163546"
  },
  {
    "email": "renuka_k@vnrvjiet.in",
    "name": "Mrs.Renuka Kondabala",
    "role": "faculty",
    "department": "IT",
    "facultyId": "50150406-113223"
  },
  {
    "email": "ravi_t@vnrvjiet.in",
    "name": "Mr.Ravi Tene",
    "role": "faculty",
    "department": "IT",
    "facultyId": "06150407-141256"
  },
  {
    "email": "koteswararao_m@vnrvjiet.in",
    "name": "Mr.M.Koteswara Rao",
    "role": "faculty",
    "department": "IT",
    "facultyId": "8894-150409-104541"
  },
  {
    "email": "revathi_a@vnrvjiet.in",
    "name": "Mrs.A.Revathi",
    "role": "faculty",
    "department": "IT",
    "facultyId": "75150407-111638"
  },
  {
    "email": "kalyani_d@vnrvjiet.in",
    "name": "Dr.D Kalyani",
    "role": "faculty",
    "department": "IT",
    "facultyId": "0124-150408-165221"
  },
  {
    "email": "saritha_v@vnrvjiet.in",
    "name": "Dr.Vemulapalli Saritha",
    "role": "faculty",
    "department": "IT",
    "facultyId": "0562-150507-130733"
  },
  {
    "email": "susmitha_m@vnrvjiet.in",
    "name": "Mrs.M.Susmitha",
    "role": "faculty",
    "department": "IT",
    "facultyId": "95150404-100034"
  },
  {
    "email": "muralimohan_s@vnrvjiet.in",
    "name": "Mr.S Murali Mohan",
    "role": "faculty",
    "department": "IT",
    "facultyId": "5421-171205-150019"
  },
  {
    "email": "pavankumar_i@vnrvjiet.in",
    "name": "Mr.I. Pavan Kumar",
    "role": "faculty",
    "department": "IT",
    "facultyId": "61150403-215716"
  },
  {
    "email": "swathi_s@vnrvjiet.in",
    "name": "Dr.S Swathi",
    "role": "faculty",
    "department": "IT",
    "facultyId": "1842-151217-125549"
  },
  {
    "email": "srivani_b@vnrvjiet.in",
    "name": "Dr.Srivani B",
    "role": "faculty",
    "department": "IT",
    "facultyId": "4205-160314-185109"
  },
  {
    "email": "renudeepti_s@vnrvjiet.in",
    "name": "Mrs.S.Renu Deepti",
    "role": "faculty",
    "department": "IT",
    "facultyId": "2371-160314-183654"
  },
  {
    "email": "sreenivasarao_a@vnrvjiet.in",
    "name": "Dr A.Sreenivasa Rao",
    "role": "faculty",
    "department": "IT",
    "facultyId": "70150405-151757"
  },
  {
    "email": "rohini_ch@vnrvjiet.in",
    "name": "Mrs.Ch.Rohini",
    "role": "faculty",
    "department": "IT",
    "facultyId": "5967-190129-124755"
  },
  {
    "email": "dakshayanihimabindu_d@vnrvjiet.in",
    "name": "Dr.Dakshayani Himabindu",
    "role": "faculty",
    "department": "IT",
    "facultyId": "38150330-175555"
  },
  {
    "email": "sravanthi_k@vnrvjiet.in",
    "name": "Dr.Keesara Sravanthi",
    "role": "faculty",
    "department": "IT",
    "facultyId": "1276-150413-172646"
  },
  {
    "email": "raswitha_b@vnrvjiet.in",
    "name": "Mrs Raswitha Bandi",
    "role": "faculty",
    "department": "IT",
    "facultyId": "7101-151222-101351"
  },
  {
    "email": "balakesavareddy_p@vnrvjiet.in",
    "name": "Mr P. Balakesava Reddy",
    "role": "faculty",
    "department": "IT",
    "facultyId": "74150406-120750"
  },
  {
    "email": "sravankiran_v@vnrvjiet.in",
    "name": "Mr V. Sravan Kiran",
    "role": "faculty",
    "department": "IT",
    "facultyId": "5931-170521-114846"
  },
  {
    "email": "anandkumar_s@vnrvjiet.in",
    "name": "Mr S.Anand Sharma",
    "role": "faculty",
    "department": "IT",
    "facultyId": "1909-161223-111715"
  },
  {
    "email": "kamala_ch@vnrvjiet.in",
    "name": "Kamala Challa",
    "role": "faculty",
    "department": "IT",
    "facultyId": "31150331-142854"
  },
  {
    "email": "radhika_k@vnrvjiet.in",
    "name": "K. Radhika",
    "role": "faculty",
    "department": "IT",
    "facultyId": "3159-150410-105846"
  },
  {
    "email": "manojkumar_v@vnrvjiet.in",
    "name": "Manoj Kumar Vemula",
    "role": "faculty",
    "department": "IT",
    "facultyId": "48150407-113020"
  },
  {
    "email": "sravanthi_j@vnrvjiet.in",
    "name": "Jakkula Sravanthi",
    "role": "faculty",
    "department": "IT",
    "facultyId": "3383-160307-153908"
  },
  {
    "email": "bhaskarreddy_y@vnrvjiet.in",
    "name": "Y.Bhaskar Reddy",
    "role": "faculty",
    "department": "IT",
    "facultyId": "6954-220711-152809"
  },
  {
    "email": "yaminirani_r@vnrvjiet.in",
    "name": "R.Yamini Rani",
    "role": "faculty",
    "department": "IT",
    "facultyId": "2028-160227-153135"
  },
  {
    "email": "radha_m@vnrvjiet.in",
    "name": "M.Radha",
    "role": "faculty",
    "department": "IT",
    "facultyId": "7626-221201-133625"
  },
  {
    "email": "kumaraswamy_it@vnrvjiet.in",
    "name": "Mr.S.KumaraSwamy",
    "role": "faculty",
    "department": "IT",
    "facultyId": "9299-161215-112342"
  },
  {
    "email": "anoosha_s@vnrvjiet.in",
    "name": "Mrs. S. Anoosha",
    "role": "faculty",
    "department": "IT",
    "facultyId": "1110-160304-175027"
  },
  {
    "email": "soujanya_a@vnrvjiet.in",
    "name": "Soujanya Ambala",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "anuragavi_v@vnrvjiet.in",
    "name": "V. Anu Ragavi",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "ramakrishna_it@vnrvjiet.in",
    "name": "G.Ramakrishna",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "swetha_it@vnrvjiet.in",
    "name": "P.Swetha",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "purushothamanaidu_c@vnrvjiet.in",
    "name": "C.P Naidu",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "nagarjuna_it@vnrvjiet.in",
    "name": "T.Nagarjuna",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "pswathi_it@vnrvjiet.in",
    "name": "P.swathi",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "bsrinivasreddy_it@vnrvjiet.in",
    "name": "B.Srinivasa Reddy",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "srikrishnakireeti_it@vnrvjiet.in",
    "name": "V.Krishna Kireeti",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "akhil_it@vnrvjiet.in",
    "name": "M.Akhil",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "",
    "name": "K.Peerya",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "anwar_it@vnrvjiet.in",
    "name": "Mohd Anwar",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "surekha_it@vnrvjiet.in",
    "name": "Ravi Surekha",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "venkatakrishnaveni_it@vnrvjiet.in",
    "name": "M.Venkata Krishnaveni",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "habeebali_it@vnrvjiet.in",
    "name": "Mr.Mohammed Habeeb Ali",
    "role": "faculty",
    "department": "IT",
    "facultyId": ""
  },
  {
    "email": "aparna_p@vnrvjiet.in",
    "name": "Dr.P.Aparna",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "83150406-133238"
  },
  {
    "email": "pothanna_n@vnrvjiet.in",
    "name": "Dr.N.Pothanna",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "08150406-151908"
  },
  {
    "email": "srinivas_j@vnrvjiet.in",
    "name": "Dr.J.Srinivas",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "56150404-160732"
  },
  {
    "email": "jithenderreddy_g@vnrvjiet.in",
    "name": "Dr.G.Jithender Reddy",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "78150406-142610"
  },
  {
    "email": "swarankar_d@vnrvjiet.in",
    "name": "Mr.D.Swarnakar",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "17150404-155038"
  },
  {
    "email": "Sireesha_g@vnrvjiet.in",
    "name": "Dr.G.Sireesha",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "77150405-130753"
  },
  {
    "email": "ganeshkumar_v@vnrvjiet.in",
    "name": "Dr.V.Ganesh kumar",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "5202-150409-163903"
  },
  {
    "email": "kusuma_t@vnrvjiet.in",
    "name": "Mrs.T.Kusuma",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "2593-161025-150330"
  },
  {
    "email": "srilatha_r@vnrvjiet.in",
    "name": "Dr R.Srilatha",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "0479-150409-110109"
  },
  {
    "email": "rajashekar_p@vnrvjiet.in",
    "name": "Dr. P. Raja Shekar",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "59150404-174945"
  },
  {
    "email": "sivanageswararao_t@vnrvjiet.in",
    "name": "Dr. T. Siva Nageswara Rao",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "0597-220518-143723"
  },
  {
    "email": "pavankumarreddy_m@vnrvjiet.in",
    "name": "Dr.M Pavan Kumar Reddy",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "34150401-113814"
  },
  {
    "email": "shashikumar_ch@vnrvjiet.in",
    "name": "Dr. Ch Shashi kumar",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "8733-150409-104445"
  },
  {
    "email": "nagamalleswari_b@vnrvjiet.in",
    "name": "Dr. B. Naga Malleswari",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "52150404-113043"
  },
  {
    "email": "swapna_g@gmail.com",
    "name": "Dr. G Swapna",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "8544-150429-203133"
  },
  {
    "email": "prathyusha_b@vnrvjiet.in",
    "name": "Dr.B.Prathyusha",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "51150405-061937"
  },
  {
    "email": "arunakumari_n@vnrvjiet.in",
    "name": "Dr.N.Aruna Kumari",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "93150404-131153"
  },
  {
    "email": "pavankumar_kvln@vnrvjiet.in",
    "name": "Mr. K.V.L.N. Pavan Kumar",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "1369-150409-215211"
  },
  {
    "email": "anilkumar_k@vnrvjiet.in",
    "name": "Mr. K.Anil Kumar",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "4323-150408-125542"
  },
  {
    "email": "vllkusumakumari_ch@vnrvjiet.in",
    "name": "Ms. CH V L L Kusuma Kumari",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "8093-150408-181828"
  },
  {
    "email": "pavankumar_kvln@vnrvjiet.in",
    "name": "B. Sri Pavani",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "9676-190109-122543"
  },
  {
    "email": "madhavi_k@vnrvjiet.in",
    "name": "Dr Kilaru Madhavi",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "4138-240104-134008"
  },
  {
    "email": "arpitha_r@vnrvjiet.in",
    "name": "Dr. R Arpitha",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": ""
  },
  {
    "email": "vivekananda_r@vnrvjiet.in",
    "name": "Dr. Vivekananda Rayanki",
    "role": "faculty",
    "department": "Mathematics",
    "facultyId": "04150406-133535"
  },
  {
    "email": "ashok_b@vnrvjiet.in",
    "name": "Dr. Ashok Bhogi",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "22150404-163140"
  },
  {
    "email": "srinivasarao_l@vnrvjiet.in",
    "name": "Dr. L. Srinivasa Rao",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "03150404-165809"
  },
  {
    "email": "rajini_t@vnrvjiet.in",
    "name": "Dr. T. Rajani",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "9962-150408-222931"
  },
  {
    "email": "pavankumar_p@vnrvjiet.in",
    "name": "Dr. P. Pavan Kumar",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "51150404-143509"
  },
  {
    "email": "rudramamba_ks@vnrvjiet.in",
    "name": "Dr. K. S. Rudramamba",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "13150406-222541"
  },
  {
    "email": "thirmal_ch@vnrvjiet.in",
    "name": "Dr. C. Thirmal",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "1127-171117-124130"
  },
  {
    "email": "sumithra_m@vnrvjiet.in",
    "name": "Dr. M. Sumithra",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "9495-190503-174627"
  },
  {
    "email": "sureshkumar_n@vnrvjiet.in",
    "name": "Dr. N. Suresh Kumar",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "7592-150411-182704"
  },
  {
    "email": "suresh_g@vnrvjiet.in",
    "name": "Dr. G. Suresh",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "4687-200306-121628"
  },
  {
    "email": "sureshkumar_nv@vnrvjiet.in",
    "name": "Dr. N. V. Suresh Kumar",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "1682-200107-062514"
  },
  {
    "email": "venkateswararao_g@vnrvjiet.in",
    "name": "Dr. G. Venkateswara Rao",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "9499-210628-111023"
  },
  {
    "email": "venkatasai_d@vnrvjiet.in",
    "name": "Dr. Venkata Sai Dasari",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "6242-180704-182344"
  },
  {
    "email": "srinivas_b@vnrvjiet.in",
    "name": "Dr. B. Srinivas",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "3120-200307-004926"
  },
  {
    "email": "ramesh_m@vnrvjiet.in",
    "name": "Dr. M. Ramesh",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "3340-210707-162544"
  },
  {
    "email": "nagendraprasad_d@vnrvjiet.in",
    "name": "Dr. D. N. Prasad",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "4634-190503-161414"
  },
  {
    "email": "jahangeer_n@vnrvjiet.in",
    "name": "Dr. Nellutla Jahangeer",
    "role": "faculty",
    "department": "Physics",
    "facultyId": "96150407-144358"
  },
  {
    "email": "krajinikanthreddy_hands@vnrvjiet.in",
    "name": "Mr. K. Rajanikanth Reddy",
    "role": "faculty",
    "department": "Physics",
    "facultyId": ""
  },
  {
    "email": "psatyanarayana_hands@vnrvjiet.in",
    "name": "Mr. P. Satyanarayna",
    "role": "faculty",
    "department": "Physics",
    "facultyId": ""
  },
  {
    "email": "Jyothi_hands@vnrvjiet.in",
    "name": "Mrs .N. Jyothi",
    "role": "faculty",
    "department": "Physics",
    "facultyId": ""
  }
]

const DfacutlyData = [
  {
    "email": "sunilkumar_t@vnrvjiet.in",
    "name": "Dr.T. Sunil Kumar",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "47150404-190603"
  },
  {
    "email": "sunilkumar_t@vnrvjiet.in",
    "name": "Dr.T. Sunil Kumar",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "47150404-190607"
  },
  {
    "email": "rajasekar_m@vnrvjiet.in",
    "name": "Dr.M. Raja Sekar",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "14150402-115407"
  },
  {
    "email": "subhash_p@vnrvjiet.in",
    "name": "Dr. P. Subhash",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "8601-150407-215242"
  },
  {
    "email": "kranthikumar_r@vnrvjiet.in",
    "name": "Mr.R. Kranthi Kumar",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "32150403-182619"
  },
  {
    "email": "Preethi_t@vnrvjiet.in",
    "name": "Dr.T. Preethi",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "2625-220308-111834"
  },
  {
    "email": "veeranjaneyulu_p@vnrvjiet.in",
    "name": "Mr.P. Veeranjaneyulu",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "2118-150426-113758"
  },
  {
    "email": "Sunanda_n@vnrvjiet.in",
    "name": "Dr. N. Sunanda",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "9955-220509-162547"
  },
  {
    "email": "ashalatha_g@vnrvjiet.in",
    "name": "Mrs.G. Ashalatha",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "4887-220720-121316"
  },
  {
    "email": "lalitha_e@vnrvjiet.in",
    "name": "Mrs.E. Lalitha",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "1001-160314-205830"
  },
  {
    "email": "sathar_g@vnrvjiet.in",
    "name": "Mr.G. Sathar",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "6476-220708-121723"
  },
  {
    "email": "manmathnath@vnrvjiet.in",
    "name": "Mr. Manmath Nath Das",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "2610-220719-213956"
  },
  {
    "email": "nehamargret_i@vnrvjiet.in",
    "name": "Ms.Issac Neha Margaret",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "1429-230201-154632"
  },
  {
    "email": "saibhargav_k@vnrvjiet.in",
    "name": "Mr. K.Sai Bhargav",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "8774-230209-154747"
  },
  {
    "email": "rasmitakumari_m@vnrvjiet.in",
    "name": "Dr.Rasmita Kumari Mohanty",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "1448-150408-131255"
  },
  {
    "email": "Devika_p@vnrvjiet.in",
    "name": "Mrs.P.Devika",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "3929-150411-133834"
  },
  {
    "email": "Mounika_g@vnrvjiet.in",
    "name": "Mrs.G.Mounika",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "7919-230403-142453"
  },
  {
    "email": "sangameshwar_b@vnrvjiet.in",
    "name": "Mr. B.Sangameshwar",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "6786-220607-133808"
  },
  {
    "email": "krishnapriya_s@vnrvjiet.in",
    "name": "Dr.S.Krishnapriya",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "3182-220527-125000"
  },
  {
    "email": "akhil_ch@vnrvjiet.in",
    "name": "Ch.Akhil",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "5814-230404-123307"
  },
  {
    "email": "pramodkumar_a@vnrvjiet.in",
    "name": "Dr.A.Pramod Kumar",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "06150407-104422"
  },
  {
    "email": "manju_d@vnrvjiet.in",
    "name": "Dr. D. Manju",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "0715-0407-155454"
  },
  {
    "email": "spoorthy_g@vnrvjiet.in",
    "name": "Dr. Spoorthy G",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "8180-231018-172322"
  },
  {
    "email": "sreevidya_d@vnrvjiet.in",
    "name": "Mrs. Sreevidya",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "0475-160229-111549"
  },
  {
    "email": "venkateswararao_panthangi@vnrvjiet.in",
    "name": "Mr. P. Venkateswara Rao",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "2261-150427-171854"
  },
  {
    "email": "radhika_v@vnrvjiet.in",
    "name": "Dr. V. Radhika",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "3745-170128-062553"
  },
  {
    "email": "madhulatha_m@vnrvjiet.in",
    "name": "Mrs. M. Madhulatha",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "6582-160317-180601"
  },
  {
    "email": "vanajakumari_g@vnrvjiet.in",
    "name": "Mrs. G Vanaja Kumari",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "4022-220821-175212"
  },
  {
    "email": "sravanthi_g@vnrvjiet.in",
    "name": "Mrs. G. Sravanthi",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "4208-150414-152223"
  },
  {
    "email": "Lalitha_p@vnrvjiet.in",
    "name": "Mrs. P. Lalitha",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "2743-160224-145159"
  },
  {
    "email": "srisevitha_m@vnrvjiet.in",
    "name": "Mrs. M. Sri Sevitha",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "0191-210327-121642"
  },
  {
    "email": "veerabhadra_d@vnrvjiet.in",
    "name": "Mr. D. Veera Bhadra Rao",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "5694-240306-102340"
  },
  {
    "email": "dhanalaxmi_b@vnrvjiet.in",
    "name": "Mrs. B. Dhanalaxmi",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "1442-160130-104102"
  },
  {
    "email": "sudheer_n@vnrvjiet.in",
    "name": "Mr. N. Sudheer",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": ""
  },
  {
    "email": "meenakshi_p@vnrvjiet.in",
    "name": "Mrs. P. Meenakshi",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "8779-230309-143649"
  },
  {
    "email": "Susmitha_v@vnrvjiet.in",
    "name": "Mrs. V.Susmitha",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": ""
  },
  {
    "email": "Jyothirmai_ch@vnrvjiet.in",
    "name": "Mrs. Ch.N.V.Jyothirmai",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": ""
  },
  {
    "email": "Nagasandhya_k@vnrvjiet.in",
    "name": "Mrs. K. Naga Sandhya",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": ""
  },
  {
    "email": "Laxmidevi_n@vnrvjiet.in",
    "name": "Dr. M.Laxmidevi",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": ""
  },
  {
    "email": "madhuri_n@vnrvjiet.in",
    "name": "Mrs. N. Madhuri",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "1526-241126-140226"
  },
  {
    "email": "dsrinivasarao_ds@vnrvjiet.in",
    "name": "Mr. D.Srinivas Rao",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": ""
  },
  {
    "email": "swathi_p@vnrvjiet.in",
    "name": "Mrs. P. Swathi",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "9952-161220-123712"
  },
  {
    "email": "shravani_g@vnrvjiet.in",
    "name": "Mrs. G.Shravani",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "5260-250118-113135"
  },
  {
    "email": "vasundhara_n@vnrvjiet.in",
    "name": "Ms. N.Vasundhara",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "0118-160217-125259"
  },
  {
    "email": "jayabhargavi_a@vnrvjiet.in",
    "name": "Mrs. A.Jayabhargavi",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": ""
  },
  {
    "email": "srinivaskumar_s@vnrvjiet.in",
    "name": "Mr. S. Srinivas Kumar",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "4961-240908-181359"
  },
  {
    "email": "vinaykumar_v@vnrvjiet.in",
    "name": "Mr. V. Vinay Kumar",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": ""
  },
  {
    "email": "Srikanthreddy_v@vnrvhiet.in",
    "name": "Dr. V. Srikanth Reddy",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "2559-200307-152105"
  },
  {
    "email": "usharani_g@vnrvjiet.in",
    "name": "Mrs. G.Usha Rani",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "0118-230406-115420"
  },
  {
    "email": "madhu_a@vnrvjiet.in",
    "name": "Mr. A. Madhu",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "9117-220603-141622"
  },
  {
    "email": "dhanshree_p@vnrvjiet.in",
    "name": "Ms. Dhanshree Mukund Pande",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "2920-250218-115851"
  },
  {
    "email": "jothsna_d@vnrvjiet.in",
    "name": "Mrs. Jothsna Duggirala",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": ""
  },
  {
    "email": "manoharreddy_y@vnrvjiet.in",
    "name": "Mr. Y Manohar Reddy",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "0349-210806-153422"
  },
  {
    "email": "saipragnya_k@vnrvjiet.in",
    "name": "Ms. Sai Pragnya Kasturi",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": ""
  },
  {
    "email": "pushpalatha_n@vnrvjiet.in",
    "name": "Dr. N Pushpa Latha",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": "73150404-182934"
  },
  {
    "email": "khaleel_sk@vnrvjiet.in",
    "name": "Mr. Shaik Khaleel",
    "role": "faculty",
    "department": "CSE-(CyS,DS)_and_AI&DS",
    "facultyId": ""
  },
  {
    "email": "srinivasarao_t@vnrvjiet.in",
    "name": "Dr.T.Srinivasa Rao",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "5685-150409-131541"
  },
  {
    "email": "venkataramana_m@vnrvjiet.in",
    "name": "Dr.M.Venkata Ramana",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "5043-150408-125708"
  },
  {
    "email": "amjad_s@vnrvjiet.in",
    "name": "Dr.Shaik Amjad",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "66150402-143755"
  },
  {
    "email": "prasad_gvl@vnrvjiet.in",
    "name": "Dr.G.V.L.Prasad",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "90150407-143953"
  },
  {
    "email": "praveenkumar_t@vnrvjiet.in",
    "name": "Mr.T.Praveen Kumar",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "63150402-144531"
  },
  {
    "email": "ramu_r@vnrvjiet.in",
    "name": "Mr.R.Ramu",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "2015-150413-105826"
  },
  {
    "email": "raju_t@vnrvjiet.in",
    "name": "Mr.T.Raju",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "8341-150409-151449"
  },
  {
    "email": "suresh_d@vnrvjiet.in",
    "name": "Dr.D.Suresh",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "6617-160315-124141"
  },
  {
    "email": "venkataramarao_m@vnrvjiet.in",
    "name": "Mr.Venkata Ramarao Mutyala",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "2513-170103-100638"
  },
  {
    "email": "aziz_a@vnrvjiet.in",
    "name": "Mr. Mohamad Aziz Athani",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "0476-161026-142919"
  },
  {
    "email": "krishna_m@vnrvjiet.in",
    "name": "Mr. M. Krishna",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "7560-170520-172558"
  },
  {
    "email": "balappa_bh@vnrvjiet.in",
    "name": "Mr.BALAPPA B.Hadagali",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "1714-170523-151148"
  },
  {
    "email": "rathinam_v@vnrvjiet.in",
    "name": "Dr V.Rathinam",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "6835-180208-222923"
  },
  {
    "email": "krishnakumar_ts@vnrvjiet.in",
    "name": "Dr.Krishna Kumar T.S",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "1015-191113-144449"
  },
  {
    "email": "chandrashekhar_b@vnrvjiiet.in",
    "name": "Mr.Chandrashekhar Banad",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "1716-220607-105604"
  },
  {
    "email": "vinay_k@vnrvjiet.in",
    "name": "Mr.Vinay Kulkarni",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "2596-150415-105806"
  },
  {
    "email": "harishbabu_b@vnrvjiet.in",
    "name": "Dr. Bachina Harish Babu",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "1384-220708-130920"
  },
  {
    "email": "vijay_m@vnrvjiet.in",
    "name": "Mr.Manthena Vijay",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "9320-231102-160808"
  },
  {
    "email": "srichaitanya_ch@vnrvjiet.in",
    "name": "Dr. Ch. Sri Chaitanya",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": "6215-240104-135207"
  },
  {
    "email": "ansari_sa@vnrvjiet.in",
    "name": "Dr. Shaik Aslam Ansari",
    "role": "faculty",
    "department": "Automobile",
    "facultyId": ""
  },
  {
    "email": "jyotsna_c@vnrvjiet.in",
    "name": "Dr. C. Jyotsna",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "90150404-163902"
  },
  {
    "email": "madhavik@vnrvjiet.in",
    "name": "Dr. K. Madhavi",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "07150406-161954"
  },
  {
    "email": "padmavathi_p@vnrvjiet.in",
    "name": "Dr. P. Padmavathi",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "46150406-214230"
  },
  {
    "email": "balavardhanarao_ar@vnrvjiet.in",
    "name": "Dr. A. R. Balavardhana Rao",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "6687-160316-165018"
  },
  {
    "email": "lakshmiviveka_g@vnrvjiet.in",
    "name": "Dr. G. Lakshmi Viveka",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "1983-161226-003818"
  },
  {
    "email": "mamatha_n@vnrvjiet.in",
    "name": "Dr. N. Mamatha",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "91150406-113838"
  },
  {
    "email": "shuchitiwari1@gmail.com",
    "name": "Dr. Shuchi Tiwari",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "3827-160307-131739"
  },
  {
    "email": "pratyusha_s@vnrvjiet.in",
    "name": "Ms. S. Pratyusha",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "3492-161216-195533"
  },
  {
    "email": "nirmala_g@vnrvjiet.in",
    "name": "Dr. G. Nirmala",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "8245-180702-182130"
  },
  {
    "email": "apparao_s@vnrvjiet.in",
    "name": "Dr. S. Appa Rao",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "8281-210702-124430"
  },
  {
    "email": "rajitha_p@vnrvjiet.in",
    "name": "Mrs. P. Rajitha",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "64150504-125217"
  },
  {
    "email": "sivakrishna_n@vnrvjiet.in",
    "name": "Dr. Narra Sivakrishna",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "3215-220430-160923"
  },
  {
    "email": "gangadhara_a@vnrvjiet.in",
    "name": "Dr. A. Gangadhara",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "3080-220526-141022"
  },
  {
    "email": "sricharitha_a@vnrvjiet.in",
    "name": "Dr. A. Sri Charitha",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "0690-160203-150511"
  },
  {
    "email": "suresh_p@vnrvjiet.in",
    "name": "Dr. P. Suresh",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "9392-180704-001253"
  },
  {
    "email": "likha_ch@vnrvjiet.in",
    "name": "Dr Likha Chandran",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "6977 220325 151843"
  },
  {
    "email": "nagarjunakumar_s@vnrvjiet.in",
    "name": "Dr. N. Kumar Srungavruksham",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "212675-25008"
  },
  {
    "email": "chander_a@vnrvjiet.in",
    "name": "Dr. Chander A Pawar",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "212675-25008"
  },
  {
    "email": "rambabu_s@vnrvjiet.in",
    "name": "Dr. Rambabu Sydam",
    "role": "faculty",
    "department": "Chemistry",
    "facultyId": "8273-250901-164359"
  },
  {
    "email": "mallika_a@vnrvjiet.in",
    "name": "Dr. A. Mallika",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "51150406-150532"
  },
  {
    "email": "chandramohanrao_bdv@vnrvjiet.in",
    "name": "Dr. BDV Chandra Mohan Rao",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "7160-150407-204742"
  },
  {
    "email": "ramujee_k@vnrvjiet.in",
    "name": "Dr. K. Ramujee",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "0171-150407-213332"
  },
  {
    "email": "narendrakumar_b@vnrvjiet.in",
    "name": "Dr. B. Narendra Kumar",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "5111-150408-175736"
  },
  {
    "email": "ramesh_a@vnrvjiet.in",
    "name": "Dr. A. Ramesh",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "6744-150412-204559"
  },
  {
    "email": "ravikumar_k@vnrvjiet.in",
    "name": "Dr. K Ravi Kumar",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "1263-160303-180642"
  },
  {
    "email": "srinivas_kadali@vnrvjiet.in",
    "name": "Dr. Kadali Srinivas",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "7749-151219-181423"
  },
  {
    "email": "suresh_k@vnrvjiet.in",
    "name": "Dr. K.Suresh",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "0745-150409-122315"
  },
  {
    "email": "lalitha_g@vnrvjiet.com",
    "name": "Dr. G. Lalitha",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "37150404-121416"
  },
  {
    "email": "gopiraghunadh_p@vnrvjiet.in",
    "name": "Mr. PVS Gopi Raghunadh",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "3693-150409-202048"
  },
  {
    "email": "teja_tn@vnrvjiet.in",
    "name": "Dr. T. Naga Teja",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "49150404-114318"
  },
  {
    "email": "artisudam_p@vnrvjiet.in",
    "name": "Mrs. P.Arti Sudam",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "2838-150509-142354"
  },
  {
    "email": "veerendragopi_k@vnrvjiet.in",
    "name": "Mr. K. Veerendra Gopi",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "3795-151221-130914"
  },
  {
    "email": "sangeetha_s@vnrvjiet.in",
    "name": "Mrs. S. Sangeetha",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "9717-151222-145610"
  },
  {
    "email": "ramyakrishna_v@vnrvjiet.in",
    "name": "Mrs. V. Ramya Krishna",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "6542-150408-135509"
  },
  {
    "email": "jyothirmai_a@vnrvjiet.in",
    "name": "Mrs. A. Jyothirmai",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "9761-161222-111702"
  },
  {
    "email": "shivabhushan__jyv@vnrvjiet.in",
    "name": "Mr. JYV Shiva Bhushan",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "6268-170102-151059"
  },
  {
    "email": "harika_r@vnrvjiet.in",
    "name": "Mrs. R. Harika",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "0233-170131-020324"
  },
  {
    "email": "rakesh_s@vnrvjiet.in",
    "name": "Dr. S. Rakesh",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "5356-180131-005247"
  },
  {
    "email": "harinder_d@vnrvjiet.in",
    "name": "Dr. Harinder Devavath",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "5091-190507-160535"
  },
  {
    "email": "muralikrishna_b@vnrvjiet.in",
    "name": "Dr. B.Murali Krishna",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "3965-200306-180920"
  },
  {
    "email": "saisahitya_k@vnrvjiet.in",
    "name": "Dr. K.Sai Sahitya",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "8274-210702-155700"
  },
  {
    "email": "sambasivarao_g@vnrvjiet.in",
    "name": "Mr. G.Sambasiva Rao",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "0401-220427-101804"
  },
  {
    "email": "soujanya_b@vnrvjiet.in",
    "name": "Mrs. J. Soujanya",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "9798-220707-143231"
  },
  {
    "email": "ramarao_p@vnrvjiet.in",
    "name": "Mr. P. Rama Rao",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "4149-180416-121931"
  },
  {
    "email": "seenu_pz@vnrvjiet.in",
    "name": "Dr. Seenu P Z",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "0087-230302-102747"
  },
  {
    "email": "praseeda_d@vnrvjiet.in",
    "name": "Mrs. D. Praseeda",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "8817-230404-111059"
  },
  {
    "email": "gokulan_r@vnrvjiet.in",
    "name": "Dr. R. Gokulan",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "7874-230520-162247"
  },
  {
    "email": "pardhasaradhi_k@vnrvjiet.in",
    "name": "Dr. Kasinikota Pardhasaradhi",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "7940-231031-112417"
  },
  {
    "email": "lohit_h@vnrvjiet.in",
    "name": "Mr.Lohit H",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "9347-231106-104726"
  },
  {
    "email": "srinivasarao_tanniru@vnrvjiet.in",
    "name": "Mr.T.Srinivasa Rao",
    "role": "faculty",
    "department": "Civil",
    "facultyId": "4490-150410-140232"
  },
  {
    "email": "bhavani_t@vnrvjiet.in",
    "name": "Mrs. T. Bhavani Chowdary",
    "role": "faculty",
    "department": "Civil",
    "facultyId": ""
  },
  {
    "email": "poonam_s@vnrvjiet.in",
    "name": "Dr. Poonam Shekhawat",
    "role": "faculty",
    "department": "Civil",
    "facultyId": ""
  },
  {
    "email": "vamsikrishna_sh@vnrvjiet.in",
    "name": "Mr. S. H. Vamsi Krishna",
    "role": "faculty",
    "department": "Civil",
    "facultyId": ""
  },
  {
    "email": "baby_v@vnrvjiet.in",
    "name": "Dr. Vadlana Baby",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "0733-150409-100036"
  },
  {
    "email": "ckiranmai@vnrvjiet.in",
    "name": "Dr. Cherukuri Kiran Mai",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "37150406-133923"
  },
  {
    "email": "nagini_s@vnrvjiet.in",
    "name": "Dr. Sabbineni Nagini",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "5540-150409-151342"
  },
  {
    "email": "kiranmayee_bv@vnrvjiet.in",
    "name": "Dr. Bolneni Venkata Kiranmayee",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "18150406-133332"
  },
  {
    "email": "rameshchandra_g@vnrvjiet.in",
    "name": "Dr. Gollapudi Rameshchandra",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "43150402-150152"
  },
  {
    "email": "neelakantan_p@vnrvjiet.in",
    "name": "Dr. Puligundla Neelakantan",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "4482-161125-142436"
  },
  {
    "email": "madhubala_m@vnrvjiet.in",
    "name": "Dr. Myneni Madhu Bala",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "2054-160219-143542"
  },
  {
    "email": "gangappa_m@vnrvjiet.in",
    "name": "Dr. Malige Gangappa",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "75150406-222443"
  },
  {
    "email": "sivakumar_pv@vnrvjiet.in",
    "name": "Dr. Pasupuleti Venkata Siva Kumar",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "97150402-154036"
  },
  {
    "email": "brahmanandareddy_a@vnrvjiet.in",
    "name": "Dr. Annapu Reddy Brahmananda Reddy",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "77150405-153609"
  },
  {
    "email": "deepak_s@vnrvjiet.in",
    "name": "Dr. Deepak Sukheja",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "8412-170213-000212"
  },
  {
    "email": "thayyabakhatoon_md@vnrvjiet.in",
    "name": "Dr.Thayyaba Khatoon MD",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "8064-150413-113104"
  },
  {
    "email": "anjusha_p@vnrvjiet.ac.in",
    "name": "Dr. Anjusha Nitin Pimpalshende",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "8536-151222-152431"
  },
  {
    "email": "ravikanth_m@vnrvjiet.in",
    "name": "Dr. Motupalli Ravi Kanth",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "8946-150428-143903"
  },
  {
    "email": "sailaja_nv@vnrvjiet.in",
    "name": "Dr. Nekkanti Venkata Sailaja",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "27150402-231225"
  },
  {
    "email": "vasundhara_d@vnrvjiet.in",
    "name": "Dr. Desapandya Naga Vasundara",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "66150406-155519"
  },
  {
    "email": "vasavi_r@vnrvjiet.in",
    "name": "Dr. Vasavi Ravuri",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "94150407-171733"
  },
  {
    "email": "vijayasaraswathi_r@vnrvjiet.in",
    "name": "Dr. Redrowthu Vijaya Saraswathi",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "16150404-113719"
  },
  {
    "email": "srinivas_k@vnrvjiet.in",
    "name": "Dr. Kanakala Srinivas",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "7254-150409-111929"
  },
  {
    "email": "madhavi_a@vnrvjiet.in",
    "name": "Mrs. Alli Madhavi",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "73150407-115048"
  },
  {
    "email": "radhika_p@vnrvjiet.in",
    "name": "Dr Pathi Radhika",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "94150402-154930"
  },
  {
    "email": "gnanaprakash_t@vnrvjiet.in",
    "name": "Mr.Thuraka Gnana Prakash",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "43150405-150734"
  },
  {
    "email": "jahnavi_s@vnrvjiet.in",
    "name": "Mrs.Somavarapu Jahnavi",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "0362-150428-091442"
  },
  {
    "email": "lakshmikalyani_n@vnrvjiet.in",
    "name": "Mrs.Neerukonda Lakshmi Kalyani",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "7977-150417-160532"
  },
  {
    "email": "sandeepchaitanya_n@vnrvjiet.in",
    "name": "Dr. N. Sandeep Chaitanya",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "9833-150430-122510"
  },
  {
    "email": "sarika_n@vnrvjiet.in",
    "name": "Mrs. Nyaramneni Sarika",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "5569-150506-103501"
  },
  {
    "email": "tejaswi_p@vnrvjiet.in",
    "name": "Dr. Potluri Tejaswi",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "8133-151216-205647"
  },
  {
    "email": "bharathkumar_p@vnrvjiet.in",
    "name": "Dr. Pokuri Bharath Kumar Chowdary",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "1727-160127-105316"
  },
  {
    "email": "ramakrishna_p@vnrvjiet.in",
    "name": "Mr. Peddarapu Ramakrishna Chowdary",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "6141-160315-121916"
  },
  {
    "email": "bheemalingappa_k@vnrvjiet.in",
    "name": "Dr. Kunka Bheemalingappa",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "6678-161119-152720"
  },
  {
    "email": "indira_l@vnrvjiet.in",
    "name": "Mrs.Lingineni Indira",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "33150404-112504"
  },
  {
    "email": "suresh_ch@vnrvjiet.in",
    "name": "Dr. Chalumuru Suresh",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "6575-160227-133435"
  },
  {
    "email": "kriti_o@vnrvjiet.in",
    "name": "Dr Kriti Ohri",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "6818-161026-163555"
  },
  {
    "email": "venkataramana_k@vnrvjiet.in",
    "name": "Dr. Venkata Ramana Kaneti",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "28150405-194151"
  },
  {
    "email": "jhansi_cse@vnrvjiet.in",
    "name": "Mrs.K Jhansi Lakshmi Bai",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "7095-150408-104438"
  },
  {
    "email": "venkatakrishnarao_cse@vnrvjiet.in",
    "name": "Mr. Mannepalli Venkata Krishna Rao",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "1036-161214-171157"
  },
  {
    "email": "nagarjuna_it@vnrvjiet.in",
    "name": "Mr.Tummala Nagarjuna",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "9265-150505-144858"
  },
  {
    "email": "nyemeesha_s@vnrvjiet.in",
    "name": "Mrs.Siripurapu Nyemeesha",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "5642-190128-152327"
  },
  {
    "email": "jyothi_p@vnrvjiet.in",
    "name": "Mrs.Putti Jyothi",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "5378-180703-164518"
  },
  {
    "email": "bhagyarekha_k@vnrvjiet.in",
    "name": "Mrs. Bhagya Rekha Konkepudi",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "7242-200306-112413"
  },
  {
    "email": "abdulhameed_sk@vnrvjiet.in",
    "name": "Shaik Abdul Hameed",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "8511-200306-115754"
  },
  {
    "email": "prasanna_p@vnrvjiet.in",
    "name": "Mrs.Pabba Prasanna",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "6977-190128-142225"
  },
  {
    "email": "laxmideepthi_g@vnrvjiet.in",
    "name": "Mrs.Gopisetti Laxmi Deepthi",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "2133-150411-143455"
  },
  {
    "email": "haripriya_k@vnrvjiet.in",
    "name": "Mrs.Kodali Hari priya",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "7229-150417-103327"
  },
  {
    "email": "sudeshna_s@vnrvjiet.in",
    "name": "Mrs.Sadula Sudeshna",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "93150404-155235"
  },
  {
    "email": "sudheerbenarji_p@vnrvjiet.in",
    "name": "Mr. Pinapati Sudheer Benarji",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "5552-160305-131455"
  },
  {
    "email": "ravindrakumar_i@vnrvjiet.in",
    "name": "Mr.Indurthi Ravindra Kumar",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "8088-151230-140705"
  },
  {
    "email": "srikanth_m@vnrvjiet.in",
    "name": "Dr.Manchikatla Srikanth",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "36150407-133638"
  },
  {
    "email": "Praveen_p@vnrvjiet.in",
    "name": "Mr.Perunalla Praveen",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "6740-160312-013518"
  },
  {
    "email": "sandhyarani_ch@vnrvjiet.in",
    "name": "Mrs.Chappidi Sandhya Rani",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "2942-230317-191418"
  },
  {
    "email": "vijayabhaskarareddy_v@vnrvjiet.in",
    "name": "Mrs.Vijaya Bhasakara Reddy V",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "1830-150419-141947"
  },
  {
    "email": "sureshkumarraju_ch@vnrvjiet.in",
    "name": "Mr.Ch. Suresh Kumar Raju",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "9248-150410-095649"
  },
  {
    "email": "rajesh_p@vnrvjiet.in",
    "name": "Mr. P. Rajesh",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "87150401-090646"
  },
  {
    "email": "saddam_sk@vnrvjiet.in",
    "name": "Sk. Saddam Hussain",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "3083-210702-085401"
  },
  {
    "email": "rambabu_cse@vnrvjiet.in",
    "name": "Mr.M. Ram Babu",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "8661-161215-111800"
  },
  {
    "email": "dhanalakshmi_cse@vnrvjiet.in",
    "name": "Mrs.V. Dhanalakshmi",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "0609-230413-210854"
  },
  {
    "email": "katyayani_cse@vnrvjiet.in",
    "name": "Mrs.A. Katyayani",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "2210-170120-122301"
  },
  {
    "email": "pramesh_cse@vnrvjiet.in",
    "name": "Mr. Palakurthi Ramesh",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "0489-230412-114356"
  },
  {
    "email": "sriramamurthy_k@vnrvjiet.in",
    "name": "Dr. Karumuri Sri Rama Murthy",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "5888-211108-114455"
  },
  {
    "email": "thirupathi_n@vnrvjiet.in",
    "name": "Mr.Thirupathi Nanuvala",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "0232-150407-213258"
  },
  {
    "email": "akhil_k@vnrvjiet.in",
    "name": "Mr.Karnam Akhil",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "8073-221213-125608"
  },
  {
    "email": "alankritha_s@vnrvjiet.in",
    "name": "Ms.Smapath Alankritha",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "6221-221213-133922"
  },
  {
    "email": "dhruvamanasa_g@vnrvjiet.in",
    "name": "Mrs.G. Dhruva Manasa",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "6417-220708-152142"
  },
  {
    "email": "sana_i@vnrvjiet.in",
    "name": "Inayath Sana",
    "role": "faculty",
    "department": "CSE",
    "facultyId": ""
  },
  {
    "email": "sandeep_m@vnrvjiet.in",
    "name": "Malle Sandeep",
    "role": "faculty",
    "department": "CSE",
    "facultyId": "051723"
  },
  {
    "email": "sandhya_n@vnrvjiet.in",
    "name": "Dr. N. Sandhya",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "14150402-120027"
  },
  {
    "email": "sagar_y@vnrvjiet.in",
    "name": "Dr. Sagar Yeruva",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "16150407-122941"
  },
  {
    "email": "kousarnikhath@vnrvjiet.in",
    "name": "Dr.A.Kousar Nikhath",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "34150405-102222"
  },
  {
    "email": "harshavardhan_a@vnrvjiet.in",
    "name": "Dr. Harshavardhan Awari",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "1958-150417-101629"
  },
  {
    "email": "nagaraju_g@vnrvjiet.in",
    "name": "Dr. G. Nagaraju",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "8924-150407-231234"
  },
  {
    "email": "sayeedakhanum_p@vnrvjiet.in",
    "name": "Mrs. Sayeedakhanum Pathan",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "9812-160201-105457"
  },
  {
    "email": "kishanbabu_k@vnrvjiet.in",
    "name": "Mr. K. Kishan Babu",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "7603-220518-151322"
  },
  {
    "email": "jyotsnarani_t@vnrvjiet.in",
    "name": "Mrs. Jyotsnarani Tripathy",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "2879-220719-220735"
  },
  {
    "email": "bhupesh_d@vnrvjiet.in",
    "name": "Mr. Bhupesh Deka",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "3172-220719-162334"
  },
  {
    "email": "vijayakumar_ch@vnrvjiet.in",
    "name": "Mr. Vijayakumar Chilamkurthi",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "6878-190702-150200"
  },
  {
    "email": "preety_s@vnrvjiet.in",
    "name": "Mrs. Preety Singh",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "8664-160112-104621"
  },
  {
    "email": "nagadurgasaile_k@vnrvjiet.in",
    "name": "Mrs. Naga Durga Saile.K",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "9639-150409-134549"
  },
  {
    "email": "sreenivasarao_k@vnrvjiet.in",
    "name": "Mr. K. Sreenivasa Rao",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "8430-230109-231226"
  },
  {
    "email": "mabasha_sk@vnrvjiet.in",
    "name": "Mr. Shaik Mabasha",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "8218-230217-103759"
  },
  {
    "email": "pswetha_cse@vnrvjiet.in",
    "name": "Mrs. Palabindela Swetha",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "9195-160223-151511"
  },
  {
    "email": "archana_kalidindi@vnrvjiet.in",
    "name": "Dr.Archana K",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "85150330-135618"
  },
  {
    "email": "pushpakumari_j@vnrvjiet.in",
    "name": "Mrs. Jupalli Pushpa Kumari",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "9718-150415-151641"
  },
  {
    "email": "prasanthi_y@vnrvjiet.in",
    "name": "Mrs. Y. Prasanthi",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "49150330-141115"
  },
  {
    "email": "gurumohan_e@vnrvjiet.in",
    "name": "Mr. Etikala Gurumohan Rao",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "04150404-115423"
  },
  {
    "email": "kishore_v@vnrvjiet.in",
    "name": "Mr. Vorem Kishore",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "0485-200229-130713"
  },
  {
    "email": "manjula_v@vnrvjiet.in",
    "name": "Mrs. V Manjula",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "7420-150412-131817"
  },
  {
    "email": "hemadevi_v@vnrvjiet.in",
    "name": "Mrs. V. Hema Devi",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "1003-231118-162008"
  },
  {
    "email": "swapnakumari_m@vnrvjiet.in",
    "name": "Mrs. M. Swapna Kumari",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "7406-220125-161509"
  },
  {
    "email": "jyothsna_r@vnrvjiet.in",
    "name": "Mrs. Ravula Jyothsna",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "8690-150413-163035"
  },
  {
    "email": "sahiti_y@vnrvjiet.in",
    "name": "Mrs. V. Sahiti Yellanki",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "9624-150409-144855"
  },
  {
    "email": "meharsharanya_m@vnrvjiet.in",
    "name": "Mrs. M. Mehar Sharanya",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "2323-240218-010538"
  },
  {
    "email": "akhila_k@vnrvjiet.in",
    "name": "Mrs. K. Akhila Tejaswini",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "0421-240214-111828"
  },
  {
    "email": "divya_c@vnrvjiet.in",
    "name": "Mrs. Chilukuri Divya",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "9678-240208-122556"
  },
  {
    "email": "prathyusha_k@vnrvjiet.in",
    "name": "Mrs. K. Prathyusha",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "5913-240215-163718"
  },
  {
    "email": "haritha_n@vnrvjiet.in",
    "name": "Mrs. N. Haritha",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "5782-151217-104928"
  },
  {
    "email": "bhagyashree_b@vnrvjiet.in",
    "name": "Mrs. Bappanna Bhagyashree",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "3750-240629-151738"
  },
  {
    "email": "sayanti_ch@vnrvjiet.in",
    "name": "Dr. Sayanti Chatterjee",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "4506-181120-142944"
  },
  {
    "email": "anjaneyulu_n@vnrvjiet.in",
    "name": "Mr. Anjaneyulu Nelluru",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "8945-240130-160732"
  },
  {
    "email": "anitha_k@vnrvjiet.in",
    "name": "Mrs. Koneru Anitha",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "1654-241125-142725"
  },
  {
    "email": "veeresh_u@vnrvjiet.in",
    "name": "Mr. Uppara Veeresh",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "6790-161210-155930"
  },
  {
    "email": "sharalydia_m@vnrvjiet.com",
    "name": "Mrs. Marlapudi Shara Lydia",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "53150402-131929"
  },
  {
    "email": "anusha_kb@gmail.com",
    "name": "Mrs. K.B.Anusha",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "6904-211211-091606"
  },
  {
    "email": "manjusha_n@vnrvjiet",
    "name": "Manjusha Nambiar",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": "5439-230414-123740"
  },
  {
    "email": "Sowmyachowdary_d@vnrvjiet.in",
    "name": "Sowmya Dondeti",
    "role": "faculty",
    "department": "CSE-AIML&IOT",
    "facultyId": ""
  },
  {
    "email": "Upadhyay_p@vnrvjiet.in",
    "name": "Dr.Poonam Upadhyay",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "94150405-004032"
  },
  {
    "email": "anuradha_k@vnrvjiet.in",
    "name": "Dr.K.Anuradha",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "7860-150409-093946"
  },
  {
    "email": "viswanatharao_j@vnrvjiet.in",
    "name": "Dr.J. Viswanatha Rao",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "0501-150415-145453"
  },
  {
    "email": "krishnakumari_n@vnrvjiet.in",
    "name": "Dr.N Krishna Kumari",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "55150406-124635"
  },
  {
    "email": "eeehead@vnrvjiet.in",
    "name": "Dr.V. Ramesh Babu",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "47150406-170828"
  },
  {
    "email": "venu_y@vnrvjiet.in",
    "name": "Dr.Y. Venu",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "1572-150410-114653"
  },
  {
    "email": "sasikumar_g@vnrvjiet.in",
    "name": "Dr. G.Sasi Kumar",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "72150407-113127"
  },
  {
    "email": "neelakanteshwarrao_b@vnrvjiet.in",
    "name": "Dr. B. Neelakanteshwar Rao",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "0411-161202-112915"
  },
  {
    "email": "srinivasarao_j@vnrvjiet.in",
    "name": "Dr. J.Srinivasa Rao",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "89150402-164401"
  },
  {
    "email": "bhavani_j@gmail.com",
    "name": "Dr. J.Bhavani",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "1439-150408-145337"
  },
  {
    "email": "veeresham_k@vnrvjiet.in",
    "name": "Dr. K. Veeresham",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "7594-150430-103524"
  },
  {
    "email": "ravikumar_d@vnrvjiet.in",
    "name": "Dr. D. Ravi Kumar",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "96150401-170945"
  },
  {
    "email": "shivaprasad_e@vnrvjiet.in",
    "name": "Dr. E. Shiva Prasad",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "39150407-160902"
  },
  {
    "email": "radhika_g@vnrvjiet.in",
    "name": "Dr. G.Radhika",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "26150407-125358"
  },
  {
    "email": "ramesh_p@vnrvjiet.in",
    "name": "Mr.P.Ramesh",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "4653-160224-113219"
  },
  {
    "email": "ganeshbabu_b@vnrvjiet.in",
    "name": "Dr. B. Ganesh Babu",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "25150402-171632"
  },
  {
    "email": "nagajyothi_m@vnrvjiet.in",
    "name": "Mrs. M.Nagajyothi",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "9283-150408-071146"
  },
  {
    "email": "prabhakar_gc@vnrvjiet.in",
    "name": "Mr. G. C.Prabhakar",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "76150406-094207"
  },
  {
    "email": "sgkrishna_d@vnrvjiet.in",
    "name": "Mr. D.S.G. Krishna",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "1702-150408-125017"
  },
  {
    "email": "poornima_s@vnrvjiet.in",
    "name": "Mrs. S.Poornima",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "9959-150408-133632"
  },
  {
    "email": "geshmakumari_r@vnrvjiet.in",
    "name": "Dr. R. Geshma Kumari",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "31150401-121113"
  },
  {
    "email": "sobhana_o@vnrvjiet.in",
    "name": "Dr O.Sobhana",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "0519-150429-161443"
  },
  {
    "email": "amarnadhreddy_n@vnrvjiet.in",
    "name": "Mr. N.Amarnadh Reddy",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "3516-150429-155923"
  },
  {
    "email": "neelima_i@vnrvjiet.in",
    "name": "Ms. I.Neelima",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "2778-160318-132021"
  },
  {
    "email": "devulal_b@vnrvjiet.in",
    "name": "Mr. B.Devulal",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "5863-150409-153603"
  },
  {
    "email": "sravani_k@vnrvjiet.in",
    "name": "Ms. K.Sravani",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "4725-150412-163746"
  },
  {
    "email": "lakshminarayana_g@vnrvjiet.in",
    "name": "Dr. G.Lakshminarayana",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "2650-161202-104359"
  },
  {
    "email": "rashmi_k@vnrvjiet.in",
    "name": "Dr. Rashmi Kapoor",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "9175-161210-122028"
  },
  {
    "email": "giriprasad_a@vnrvjiet.in",
    "name": "Dr. A. Giriprasad",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "50150406-163106"
  },
  {
    "email": "rsudha_poly@vnrvjiet.in",
    "name": "Ms. R.Sudha",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "5285-200307-152714"
  },
  {
    "email": "ksrinahth_poly@vnrvjiet.in",
    "name": "Mr.K.Srikanth",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "2870-200306-172222"
  },
  {
    "email": "subhashbabu_k@vnrvjiet.in",
    "name": "Dr.K.Subhash Babu",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "6152-220601-155601"
  },
  {
    "email": "anjalidevi_g@vnrvjiet.in",
    "name": "Ms.G.Anjali Devi",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "4016-220607-161344"
  },
  {
    "email": "nagaswetha_b@vnrvjiet.in",
    "name": "Ms.B.Naga Swetha",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "2516-220601-160857"
  },
  {
    "email": "madhuri_b@vnrvjiet.in",
    "name": "Mrs.B.Madhuri",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "6394-220707-160105"
  },
  {
    "email": "nagabushanam_p@vnrvjiet.in",
    "name": "Dr. P. Nagabushanam",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "9383-230612-111647"
  },
  {
    "email": "ravikumar_a@vnrvjiet.in",
    "name": "Dr. A. Ravi Kumar",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "4299-160306-175732"
  },
  {
    "email": "harshini_b@vnrvjiet.in",
    "name": "Ms. B Harshini",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "0670-220411-105536"
  },
  {
    "email": "anilkumar_a@vnrvjiet.in",
    "name": "Dr. A. Anil Kumar",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "7844-220708-143644"
  },
  {
    "email": "nageswarareddy_n@vnrvjiet.in",
    "name": "Dr. N. Nageswara Reddy",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "2778-240131-115706"
  },
  {
    "email": "kiran_j@vnrvjiet.in",
    "name": "Dr. Kiran Jasthi",
    "role": "faculty",
    "department": "EEE",
    "facultyId": "7663-191108-101534"
  },
  {
    "email": "cdnaidu@vnrvjiet.in",
    "name": "Dr.C.D.Naidu",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "59150406-115722"
  },
  {
    "email": "padmasai_y@vnrvjiet.in",
    "name": "Dr.Y.Padma Sai",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "47150402-093652"
  },
  {
    "email": "padmasree_l@vnrvjiet.in",
    "name": "Dr L Padma Sree",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "83150404-160632"
  },
  {
    "email": "rajendraprasad_s@vnrvjiet.in",
    "name": "Dr.S.Rajendra Prasad",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "82150401-193318"
  },
  {
    "email": "ranjan_ks@vnrvjiet.in",
    "name": "Dr.Ranjan Kumar",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "2660-160310-180718"
  },
  {
    "email": "krishnasree_v@vnrvjiet.in",
    "name": "Dr.V.Krishna Sree",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "79150402-171414"
  },
  {
    "email": "dhanalakshmi_n@vnrvjiet.in",
    "name": "Dr.N.Dhana Lakshmi",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "2399-150409-142749"
  },
  {
    "email": "shaikkhadarsharif@vnrvjiet.in",
    "name": "Shaik Khadar Sharif",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "8117-150407-223426"
  },
  {
    "email": "rameshkumar_a@vnrvjiet.in",
    "name": "Dr.A.Ramesh Kumar",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "5213-150409-123809"
  },
  {
    "email": "chalapathirao_y@vnrvjiet.in",
    "name": "Dr.Y.Chalapathi Rao",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "73150406-141234"
  },
  {
    "email": "kishore_p@vnrvjiet.in",
    "name": "Dr.P.Kishore",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "60150403-174125"
  },
  {
    "email": "rajanikumari_lv@vnrvjiet.in",
    "name": "Dr.L.V.Rajani Kumari",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "23150404-144707"
  },
  {
    "email": "archana_k@vnrvjiet.in",
    "name": "Dr.K.Archana Bhange",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "15150405-152751"
  },
  {
    "email": "priyanka_v@vnrvjiet.in",
    "name": "Dr.V.Priyanka",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "19150402-174630"
  },
  {
    "email": "kalyanasrinivas_k@vnrvjiet.in",
    "name": "Dr.K.Kalyan Srinivas",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "30150406-113713"
  },
  {
    "email": "sagarreddy_v@vnrvjiet.in",
    "name": "Dr.V.Sagar Reddy",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "5109-150512-131733"
  },
  {
    "email": "santoshkumar_ch@vnrvjiet.in",
    "name": "Dr.Santosh Kumar Choudhary",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "7783-160204-153400"
  },
  {
    "email": "santhoshkumar_d@vnrvjiet.in",
    "name": "Dr.D.Santhosh Kumar",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "5261-161114-101437"
  },
  {
    "email": "sahitya_g@vnrvjiet.in",
    "name": "Dr. G Sahitya",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "96150404-165100"
  },
  {
    "email": "ramanakumari_jlv@vnrvjiet.in",
    "name": "Dr.J.L.V.Ramana Kumari",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "72150403-094603"
  },
  {
    "email": "helan_satish@vnrvjiet.in",
    "name": "Dr.Helan Satish",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "08150402-154456"
  },
  {
    "email": "arunakumari_k@vnrvjiet.in",
    "name": "Dr.K.Aruna Kumari",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "30150404-203404"
  },
  {
    "email": "jyostna_k@vnrvjiet.in",
    "name": "Dr.K.Jyostna",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "16150406-144320"
  },
  {
    "email": "kanthisudha_d@vnrvjiet.in",
    "name": "Dr.D.Kanthi Sudha",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "88150402-171615"
  },
  {
    "email": "dharmateja_l@vnrvjiet.in",
    "name": "Dr.L.Dharma Teja",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "29150331-183418"
  },
  {
    "email": "shanthi_g@vnrvjiet.in",
    "name": "Dr.G.Shanthi",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "82150404-120638"
  },
  {
    "email": "vijayakumar_g@vnrvjiet.in",
    "name": "Dr.G.Vijaya Kumar",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "63150401-200449"
  },
  {
    "email": "naveenkumar_v@vnrvjiet.in",
    "name": "V.Naveen Kumar",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "23150404-100809"
  },
  {
    "email": "rameshreddy_d@vnrvjiet.in",
    "name": "Dr.D.Ramesh Reddy",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "7737-150410-140220"
  },
  {
    "email": "deepthi_k@vnrvjiet.in",
    "name": "K.Deepthi",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "7191-150507-124553"
  },
  {
    "email": "haritha_m@vnrvjiet.in",
    "name": "Dr. Haritha Mittapally",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "2194-150430-123942"
  },
  {
    "email": "shabarinath_bb@vnrvjiet.in",
    "name": "B.B.Shabarinath",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "1085-160315-145211"
  },
  {
    "email": "ganesh_ch@vnrvjiet.in",
    "name": "Dr.Ch.Ganesh",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "0070-160315-152235"
  },
  {
    "email": "sangeetha_k@vnrvjiet.in",
    "name": "K.Sangeetha",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "3954-161022-154436"
  },
  {
    "email": "pradeepkumar@vnrvjiet.in",
    "name": "Dr.Pradeep Kumar",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "0195-161022-122134"
  },
  {
    "email": "rajakumari_ch@vnrvjiet.in",
    "name": "Dr.Ch.Raja Kumari",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "7475-161216-111716"
  },
  {
    "email": "nagaleela_s@vnrvjiet.in",
    "name": "S.Naga Leela",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "8369-150425-223127"
  },
  {
    "email": "sureshbabu_p@vnrvjiet.in",
    "name": "P.Suresh Babu",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "5177-150409-112123"
  },
  {
    "email": "ramya_g@vnrvjiet.in",
    "name": "G.Ramya",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "1744-150411-154629"
  },
  {
    "email": "ramadevi_ece@vnrvjiet.in",
    "name": "M.Rama Devi",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "4540-160316-165257"
  },
  {
    "email": "balakrishna_jva@vnrvjiet.in",
    "name": "J.V.A.Bala Krishna",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "3527-161215-100314"
  },
  {
    "email": "kaushik_c@vnrvjiet.in",
    "name": "C.Kaushik",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "7783-170522-143635"
  },
  {
    "email": "alekhya_v@vnrvjiet.in",
    "name": "V.Alekhya",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "0187-150417-110803"
  },
  {
    "email": "manasa_y@vnrvjiet.in",
    "name": "Y.Manasa",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "79150407-131410"
  },
  {
    "email": "ravikumar_r@vnrvjiet.in",
    "name": "R.Ravi Kumar",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "2509-160306-072648"
  },
  {
    "email": "srinivas_t@vnrvjiet.in",
    "name": "Dr.Srinivas Talasila",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "51150402-130005"
  },
  {
    "email": "neelima_n@vnrvjiet.in",
    "name": "Dr.N.Neelima",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "53150406-160404"
  },
  {
    "email": "bhagyalakshmi_m@vnrvjiet.in",
    "name": "M.Bhagya Lakshmi",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "3886-220708-163704"
  },
  {
    "email": "vijayababu_e@vnrvjiet.in",
    "name": "Dr.E.Vijaya Babu",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "5784-171206-145201"
  },
  {
    "email": "pravallika_a@vnrvjiet.in",
    "name": "A.Pravallika",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "2166-180417-123901"
  },
  {
    "email": "anilkumar_chevella@vnrvjiet.in",
    "name": "Dr.Ch.Anil Kumar",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "6994-160317-125648"
  },
  {
    "email": "shoukatvali_sk@vnrvjiet.in",
    "name": "Dr.Sk.Shoukat Vali",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "7093-230317-112652"
  },
  {
    "email": "srirama_y@vnrvjiet.in",
    "name": "Sri Rama Y",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "4016-161220-160010"
  },
  {
    "email": "sireesha_a@vnrvjiet.in",
    "name": "Sireesha Amaraneni",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "3549-150408-162707"
  },
  {
    "email": "chiranjeevi_t@vnrvjiet.in",
    "name": "Chiranjeevi Thokala",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "6940-181208-140242"
  },
  {
    "email": "kmounika_ece@vnrvjiet.in",
    "name": "Mrs.Katta Mounika",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "4107-220707-140148"
  },
  {
    "email": "pradeepkumar_v@vnrvjiet.in",
    "name": "Dr.V.Pradeep kumar",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "23150407-103944"
  },
  {
    "email": "syamala_n@vnrvjiet.in",
    "name": "Mrs.N.Syamala",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "04150403-004303"
  },
  {
    "email": "kirankumar_g@vnrvjiet.in",
    "name": "Mr.G.Kiran Kumar",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "54150331-122853"
  },
  {
    "email": "baswarani_ece@vnrvjiet.in",
    "name": "Mrs.S.Baswarani",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "9431-240217-162020"
  },
  {
    "email": "dharani_k@vnrvjiet.in",
    "name": "Kamepalli Dharani",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "7356-220929-155201"
  },
  {
    "email": "ramarao_m@vnrvjiet.in",
    "name": "M. Rama Rao",
    "role": "faculty",
    "department": "ECE",
    "facultyId": "6207-200218-174218"
  },
  {
    "email": "manjulasree_r@vnrvjiet.in",
    "name": "Dr. Manjula Sri",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "58150405-142724"
  },
  {
    "email": "sreedhar_m@vnrvjiet.in",
    "name": "Dr. M.Sreedhar",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "4585-161201-160209"
  },
  {
    "email": "vidyasagar_k@vnrvjiet.in",
    "name": "Dr.K.Vidyasagar",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "30150402-161632"
  },
  {
    "email": "pranavanand_s@vnrvjiet.in",
    "name": "Dr. S. Pranavanand",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "3122-150408-230445"
  },
  {
    "email": "sudharani_k@vnrvjiet.in",
    "name": "Dr. K. Sudha Rani",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "6826-150408-004725"
  },
  {
    "email": "harikrishna_m@vnrvjiet.in",
    "name": "Dr.Harikrishna Mulam",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "4271-150409-095841"
  },
  {
    "email": "anitha_kulkarni@vnrvjiet.in",
    "name": "Dr. Anita Kulkarni",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "4644-150410-103102"
  },
  {
    "email": "nageshwar_v@vnrvjiet.in",
    "name": "Dr. V.Nageshwar",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "5292-150408-095707"
  },
  {
    "email": "kiran_c@vnrvjiet.in",
    "name": "Dr.C.Kiran",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "93150402-131530"
  },
  {
    "email": "shobana_dv@vnrvjiet.in",
    "name": "Ms. D.V. Shobhana Priscilla",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "94150403-231203"
  },
  {
    "email": "rambabu_cv@vnrvjiet.in",
    "name": "Mr. C. V. Rambabu",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "3579-150409-100539"
  },
  {
    "email": "vijaychandra_k@vnrvjiet.in",
    "name": "Dr.K.Vijay Chandra",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "3905-150408-060408"
  },
  {
    "email": "adithyakashyap_a@vnrvjiet.in",
    "name": "Mr. A Adithya Kashyap",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "4360-150408-213505"
  },
  {
    "email": "nagarjunachary_s@@vnrvjiet.in",
    "name": "Mr. S Nagarjuna chary",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "9451-150409-160530"
  },
  {
    "email": "vandana_s@vnrvjiet.in",
    "name": "Dr. Vandana Samanthula",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "36150404-150808"
  },
  {
    "email": "vamsikrishna_g@vnrvjiet.in",
    "name": "Mr. G.Vamsi Krishna",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "4477-150408-173042"
  },
  {
    "email": "bharatisagi_s@vnrvjiet.in",
    "name": "Dr. S.S.Bharati Sagi",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "9855-150408-131416"
  },
  {
    "email": "akshay_n@vnrvjiet.in",
    "name": "Dr. Naregalkar Akshay",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "29150402-125950"
  },
  {
    "email": "gopikumar_pv@vnrvjiet.in",
    "name": "Mr.P.V.Gopi Kumar",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "7687-150410-102714"
  },
  {
    "email": "jyothirmai_j@vnrvjiet.in",
    "name": "Dr. J. Jyothirmai",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "3290-150429-155205"
  },
  {
    "email": "srilaxmi_d@vnrvjiet.in",
    "name": "Dr. D.Srilaxmi",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "8927-160314-171553"
  },
  {
    "email": "sampurnalakshmi_p@vnrvjiet.in",
    "name": "Ms.P.Sampurna Lakshmi",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "5746-150418-143340"
  },
  {
    "email": "swetha_d@vnrvjiet.in",
    "name": "Ms.D.Swetha",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "3413-161222-122648"
  },
  {
    "email": "bhargav_s@vnrvjiet.in",
    "name": "Mr.S.Bhargav",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "65150403-103830"
  },
  {
    "email": "rajasekharareddy_b@vnrvjiet.in",
    "name": "Dr.B.Rajashekara Reddy",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "5905-180203-132313"
  },
  {
    "email": "senthilkumar_s@vnrvjiet.in",
    "name": "Dr.S.Senthilkumar",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "5308-180202-115849"
  },
  {
    "email": "venkanna_ch@vnrvjiet.in",
    "name": "Mr.Ch.Venkanna",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "9774-220705-145843"
  },
  {
    "email": "rasheed_h@vnrvjier.in",
    "name": "Mr. Haroon Rasheed",
    "role": "faculty",
    "department": "EIE",
    "facultyId": ""
  },
  {
    "email": "srinivasulu_a@vnrvjiet.in",
    "name": "Dr. A. Srinivasulu",
    "role": "faculty",
    "department": "EIE",
    "facultyId": ""
  },
  {
    "email": "",
    "name": "Dr.M.N.Reddy",
    "role": "faculty",
    "department": "EIE",
    "facultyId": "1674-150413-135022"
  },
  {
    "email": "kanchana_s@vnrvjiet.in",
    "name": "Dr. Kanchana Sundaram",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "sudharani_d@vnrvjiet.in",
    "name": "Dr. D. Sudha Rani",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "neelaveni_k@vnrvjiet.in",
    "name": "Dr. K. Neelaveni",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "prativarani_saha@vnrvjiet.in",
    "name": "Dr. Prathiva Rani Saha",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "Rachel_i@vnrvjiet.in",
    "name": "Dr. Rachel Irdayaraj",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "khamarjahan_sk@vnrvjiet.in",
    "name": "Dr. Khamar Jahan",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "kakarlaujjwala@gmail.com",
    "name": "Dr. K Ujjwala",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "sudhadevi_yv@vnrvjiet.in",
    "name": "Dr. Y.V. Sudha Devi",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "shafiah_w@vnrvjiet.in",
    "name": "Dr. Waheed Shafia",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "lalithasridevi_j@vnrvjiet.in",
    "name": "Dr. J. Lalitha Sridevi",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "somrwita_g@vnrvjiet.in",
    "name": "Dr. Somwrita Ghosh",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "Ruchika_r@vnrvjiet.in",
    "name": "Dr. Ruchika Rai",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "ayeshasalma@gmail.com",
    "name": "Dr. Ayesha Salma",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "divya_d@vnrvjiet.in",
    "name": "Ms. D Divya",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "ashok_k@vnrvjiet.in",
    "name": "Mr. K Ashok",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  },
  {
    "email": "sreepriya_r@vnrvjiet.in",
    "name": "Ms. R Sreepriya",
    "role": "faculty",
    "department": "English",
    "facultyId": ""
  }
]

async function insertFaculty() {
  try {
    // Connect to database
    await connectDB();
    console.log("✅ Connected to MongoDB");

    // Prepare faculty data with required OAuth fields
    const usersToInsert = facutlyData.map((faculty, index) => {
      // Generate a unique googleId based on email and index
      const googleId = `${faculty.email.replace(/[^a-zA-Z0-9]/g, '')}_${index}_${Date.now()}`;
      
      // Generate tempId if facultyId is not present
      const facultyId = faculty.facultyId && faculty.facultyId.trim() !== "" 
        ? faculty.facultyId 
        : `tempId_${index + 101}`;
      
      return {
        email: faculty.email,
        name: faculty.name,
        role: faculty.role,
        department: faculty.department,
        facultyId: facultyId,
        googleId: googleId,
        provider: "google",
        isVerified: true,
        lastLogin: new Date()
      };
    });

    // Insert faculty members
    let insertedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const userData of usersToInsert) {
      try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: userData.email });
        
        if (existingUser) {
          console.log(`⚠️  Skipped: ${userData.name} (${userData.email}) - already exists`);
          skippedCount++;
        } else {
          await User.create(userData);
          console.log(`✅ Inserted: ${userData.name} (${userData.email})`);
          insertedCount++;
        }
      } catch (error) {
        console.error(`❌ Error inserting ${userData.name}: ${error.message}`);
        errorCount++;
      }
    }

    console.log("\n📊 Summary:");
    console.log(`✅ Inserted: ${insertedCount}`);
    console.log(`⚠️  Skipped: ${skippedCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`📝 Total processed: ${usersToInsert.length}`);

  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await mongoose.connection.close();
    console.log("\n🔒 Database connection closed");
  }
}

// Run the script
insertFaculty();