import React, { useState, useEffect } from "react";

const activities = ["CG Study", "RPi Project", "Workout", "GATE Prep"];

export default function Timetable() {
  const [schedule, setSchedule] = useState({});

  // Load saved data from localStorage when the page loads
  useEffect(() => {
    const saved = localStorage.getItem("scheduleData");
    if (saved) setSchedule(JSON.parse(saved));
  }, []);

  // Save data to localStorage whenever schedule changes
  useEffect(() => {
    localStorage.setItem("scheduleData", JSON.stringify(schedule));
  }, [schedule]);

  // Generate dates for the current week
  const getWeekDates = () => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday start

    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      return d.toISOString().split("T")[0];
    });
  };

  const toggleActivity = (date, activity) => {
    setSchedule((prev) => ({
      ...prev,
      [date]: {
        ...prev[date],
        [activity]: !prev[date]?.[activity],
      },
    }));
  };

  const weekDates = getWeekDates();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🌙 Night-Owl Timetable
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Date</th>
              {activities.map((act) => (
                <th key={act} className="p-3 text-center">
                  {act}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weekDates.map((date) => (
              <tr key={date} className="border-t">
                <td className="p-3 font-medium">{date}</td>
                {activities.map((act) => (
                  <td key={act} className="p-3 text-center">
                    <input
                      type="checkbox"
                      checked={schedule[date]?.[act] || false}
                      onChange={() => toggleActivity(date, act)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
