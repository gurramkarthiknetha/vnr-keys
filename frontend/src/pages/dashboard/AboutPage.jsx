import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useSidebar } from "../../components/layout/DashboardLayout";

const AboutPage = () => {
  const { sidebarOpen } = useSidebar();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "https://keys.staysync.io/be/api";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/about`);
        if (response.status === 404) throw new Error("About data not found");
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `Server error (${response.status})`
          );
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [API_URL]);

  if (isLoading)
    return (
      <div className="p-4 text-center text-blue-300">
        <div className="animate-spin inline-block w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full mr-2"></div>
        Loading project details...
      </div>
    );

  if (error)
    return (
      <div className="p-4 text-center text-red-400">
        Error loading data: {error}
      </div>
    );

  if (!data) return null;

  return (
    <div
      className={`space-y-8 ${
        sidebarOpen ? "px-4 lg:px-6" : "px-4 lg:px-8 xl:px-12"
      } pb-16`} // 👈 Added bottom padding so page has scroll space
      style={{
        background: "linear-gradient(to bottom right, #0a0f1c, #0f172a)",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-extrabold text-white mb-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
          {data.project.title}
        </h1>
        <p className="text-blue-200 text-lg max-w-3xl mx-auto">
          {data.project.description}
        </p>
      </motion.div>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Meet the Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
          {data.team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-[#0d1628] border border-blue-400 rounded-2xl hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all p-4 sm:p-6 text-center"
            >
              {/* Avatar */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-2 border-blue-300 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                />
              </div>

              {/* Info + Socials inline */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-lg font-bold text-white">
                    {member.name}
                  </h3>
                  <div className="flex gap-2">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200 hover:text-white transition-colors" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200 hover:text-white transition-colors" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200 hover:text-white transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-blue-200 text-xs sm:text-sm mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
