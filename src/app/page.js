"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  WorkOutline,
  BusinessCenter,
  TrendingUp,
  VerifiedUser,
  ConnectWithoutContact,
} from "@mui/icons-material";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Empowering <span className="text-yellow-300">Professionals</span> &{" "}
            <br />
            <span className="text-teal-200">Job Posters</span> Across the Nation
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Bark is the trusted platform where skilled professionals find
            quality work and businesses discover top talent effortlessly.
          </motion.p>

          <motion.div
            className="flex justify-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="/professional"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-medium transition flex items-center gap-2"
            >
              <WorkOutline /> Join as a Professional
            </Link>
            <Link
              href="/job-poster/signup"
              className="bg-white text-indigo-800 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition flex items-center gap-2"
            >
              <BusinessCenter /> Post a Job
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-800">
            What Makes Bark Special?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <VerifiedUser fontSize="large" className="text-indigo-600" />
                ),
                title: "Verified Professionals",
                desc: "We ensure authenticity by verifying every professional who joins our network.",
              },
              {
                icon: (
                  <TrendingUp fontSize="large" className="text-indigo-600" />
                ),
                title: "Smart Matching",
                desc: "Get perfectly matched to jobs based on skills, area, and preferences.",
              },
              {
                icon: (
                  <ConnectWithoutContact
                    fontSize="large"
                    className="text-indigo-600"
                  />
                ),
                title: "Seamless Connection",
                desc: "Connect with employers or professionals without spam or middlemen.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow hover:shadow-md transition border border-gray-100"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-indigo-200 text-lg mb-10">
            Join the growing Bark community. Whether you're here to work or
            hire, we've got your back.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              href="/professional"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold transition"
            >
              Get Work
            </Link>
            <Link
              href="/job-poster/signup"
              className="bg-white text-indigo-800 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
