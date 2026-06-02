import { useState } from "react";

const workouts = {
  1: {
    days: [
      {
        label: "Day 1 — Upper Body",
        exercises: [
          { name: "Knee Pushups", sets: "3", reps: "Until Failure", note: "Record amount each week. Awesome exercise to watch your progress with!" },
          { name: "Overhead DB Press", sets: "4", reps: "12-25", note: "Staple upper body exercise!" },
          { name: "Tricep Pushdown", sets: "3", reps: "12-15", note: "With rope attachment or bar. All of movement is at the elbow joint." },
          { name: "Cable Rope Curls", sets: "3", reps: "12-15", note: "Can use same rope attachment as used with tricep pushdown." },
        ],
      },
      {
        label: "Day 2 — Lower Body",
        exercises: [
          { name: "Air Squats", sets: "2", reps: "10-15", note: "Quick pace reps, just squatting with no weight to warm everything up." },
          { name: "Leg Extension", sets: "2", reps: "15", note: "Controlled reps, all the way down, all the way up. Feel the burn!" },
          { name: "Goblet Squats", sets: "4", reps: "12-15", note: "Wide stance, toes pointed out, squeeze glutes at top of rep!" },
          { name: "Hamstring Curl", sets: "3", reps: "12", note: "Slow and controlled movement, feel those hamstrings burn!" },
          { name: "Wall Sit or Squat Static Hold", sets: "1", reps: "Until Failure", note: "Finish strong!" },
        ],
      },
      {
        label: "Day 3 — Upper Body",
        exercises: [
          { name: "Knee Pushups", sets: "3", reps: "Until Failure", note: "" },
          { name: "Lat Pulldown", sets: "3", reps: "12-15", note: "Squeezing shoulder blades together at peak of rep!" },
          { name: "Side Laterals", sets: "3", reps: "12-15", note: "Think of this exercise like pouring tea, pinkies up!" },
          { name: "DB or BB Curl", sets: "3", reps: "12-15", note: "" },
          { name: "Tricep Pushdown", sets: "2", reps: "20-25", note: "High rep/lighter weight, feel those triceps burn!" },
        ],
      },
    ],
  },
  2: {
    days: [
      {
        label: "Day 1 — Lower Body",
        exercises: [
          { name: "Walking Lunges", sets: "2", reps: "6-8 each leg", note: "Bodyweight, barbell on back, or holding dumbbells. Pushing with heel of front foot." },
          { name: "Frog Pumps", sets: "2", reps: "10-12", note: "Hard glute at top of rep! Can be done with weight or no weight." },
          { name: "Goblet Squats", sets: "3", reps: "12-15", note: "Weight on heels." },
          { name: "Leg Press", sets: "3", reps: "12-15", note: "Wide stance in middle of platform. Do not lock out knees at top of rep." },
          { name: "Leg Extension", sets: "2", reps: "12-15", note: "Last workout of the day, finish strong!" },
        ],
      },
      {
        label: "Day 2 — Upper Body",
        exercises: [
          { name: "Knee Pushups", sets: "3", reps: "Until Failure", note: "" },
          { name: "Overhead DB Press", sets: "3", reps: "12-15", note: "I try to use the heaviest weight I can on these. Safely!" },
          { name: "Lat Pulldown", sets: "3", reps: "12-15", note: "You can use the wide grip or narrow grip." },
          { name: "DB/BB Bicep Curl", sets: "3", reps: "12-15", note: "" },
          { name: "Behind the Head DB Extension", sets: "3", reps: "15", note: "Feel that tricep stretch at the bottom of the rep!" },
        ],
      },
      {
        label: "Day 3 — Lower Body",
        exercises: [
          { name: "Air Squats", sets: "2", reps: "15", note: "" },
          { name: "Squat Walks", sets: "2", reps: "8 each leg", note: "I recommend using a quality resistance band!" },
          { name: "Hip Thrusts", sets: "3", reps: "12-15", note: "Slow on the way down, explode up and squeeze glutes! Staple glute building exercise!" },
          { name: "Hamstring Curl", sets: "3", reps: "15", note: "Controlled reps, practice feeling that hamstring muscle." },
          { name: "Lower Back Extension", sets: "3", reps: "Until Failure", note: "Curl upper back & squeeze your glutes! Focusing on using hamstrings and glutes, not your lower back muscles." },
          { name: "Calf Press on Leg Press or Platform", sets: "2", reps: "15", note: "" },
        ],
      },
    ],
  },
  3: {
    days: [
      {
        label: "Day 1 — Upper Body",
        exercises: [
          { name: "Knee Pushups", sets: "3", reps: "Until Failure", note: "" },
          { name: "Lat Pulldown", sets: "3", reps: "12-15", note: "" },
          { name: "Seated Cable Row", sets: "3", reps: "15", note: "I like pushing myself with a heavy weight on these! Safely." },
          { name: "Rope Pulls", sets: "2", reps: "15-20", note: "Super hard shoulder blade squeeze at peak of rep!" },
          { name: "Tricep Pushdown", sets: "3", reps: "15", note: "" },
          { name: "Abs #1", sets: "", reps: "", note: "Ab circuits are on the Ab Circuits tab!" },
        ],
      },
      {
        label: "Day 2 — Lower Body",
        exercises: [
          { name: "Abductor Machine", sets: "2", reps: "15-20", note: "I like to sit forward in the chair with my hands in front of me, focusing all of the movement on my glutes!" },
          { name: "Hip Thrust", sets: "3", reps: "15-20", note: "" },
          { name: "Hamstring Curl", sets: "3", reps: "15-20", note: "" },
          { name: "Leg Press", sets: "3", reps: "15-20", note: "If you feel comfortable, up the weight!" },
          { name: "Leg Extension", sets: "3", reps: "12", note: "Finish strong! 12 reps at a controlled pace, no swinging!" },
        ],
      },
      {
        label: "Day 3 — Upper Body",
        exercises: [
          { name: "Knee Pushups", sets: "3", reps: "Until Failure", note: "" },
          { name: "Overhead DB Press", sets: "3", reps: "12-15", note: "You can do these seated, but I find standing hits so many more muscles!" },
          { name: "Side Lateral", sets: "3", reps: "12-15", note: "Strict form!" },
          { name: "Hammer Curl", sets: "3", reps: "10", note: "" },
          { name: "Tricep Pushdown", sets: "3", reps: "15", note: "Drop set on last set! Drop weight in half and rep out as many more as you can!" },
          { name: "Abs #2", sets: "", reps: "", note: "Ab circuits are on the Ab Circuits tab!" },
        ],
      },
    ],
  },
  4: {
    days: [
      {
        label: "Day 1 — Legs (Glute & Ham)",
        exercises: [
          { name: "Banded Cha Chas", sets: "2", reps: "8", note: "Watch example video on @fitwithmarihelp Instagram page." },
          { name: "Abductor Machine", sets: "3", reps: "15-20", note: "One of my favorite glute activators!" },
          { name: "Step Ups on Platform", sets: "2", reps: "10", note: "Weight on pressing foot's heel!" },
          { name: "Hip Thrusts", sets: "3", reps: "12-15", note: "Slow on the way down, explode up and squeeze glutes! Big calorie burner and glute toner." },
          { name: "Lower Back Extension", sets: "3", reps: "12-15", note: "Focusing on hamstrings and glutes!" },
          { name: "Hamstring Curl", sets: "2", reps: "15", note: "Finish strong!" },
        ],
      },
      {
        label: "Day 2 — Upper Body",
        exercises: [
          { name: "Overhead DB Press", sets: "3", reps: "12-15", note: "Try to set a personal strength record if you feel comfortable!" },
          { name: "Tricep Pushdown", sets: "3", reps: "15-20", note: "" },
          { name: "One Arm DB Row", sets: "3", reps: "10", note: "Back to back each side until all 3 sets are complete!" },
          { name: "Lat Pulldown", sets: "3", reps: "12-15", note: "" },
          { name: "DB or BB Curl", sets: "2", reps: "12-15", note: "" },
          { name: "DB or BB Curl (Slow)", sets: "2", reps: "6-8", note: "Same weight as higher rep sets but now with very slow reps, failing at 6-8." },
          { name: "Abs #2", sets: "", reps: "", note: "Ab circuits are on the Ab Circuits tab!" },
        ],
      },
      {
        label: "Day 3 — Legs (Quad & Calves)",
        exercises: [
          { name: "Walking Lunges", sets: "3", reps: "8 each leg", note: "Bodyweight, holding DB or BB on back." },
          { name: "Leg Extension", sets: "3", reps: "15-20", note: "Love using leg extension to pre-exhaust my quads before pressing!" },
          { name: "Leg Press", sets: "4", reps: "12-15", note: "4 sets, take your time and make each set count. Quality over rushing." },
          { name: "Goblet Squats", sets: "2", reps: "12", note: "Light weight, fast paced reps!" },
          { name: "Calf Press on Leg Press or Platform", sets: "3", reps: "15", note: "" },
        ],
      },
    ],
  },
  5: {
    days: [
      {
        label: "Day 1 — Chest/Shoulder/Tricep",
        exercises: [
          { name: "Knee Pushups", sets: "3", reps: "Until Failure", note: "" },
          { name: "Side Lateral SS Front DB Raise", sets: "3", reps: "10", note: "Amazing shoulder superset! 10 reps side laterals right to 10 reps front DB raise = 1 set!" },
          { name: "Side Lateral SS Front DB Raise (burnout)", sets: "1", reps: "20", note: "Lighter weight, higher rep." },
          { name: "Upright Row", sets: "3", reps: "12-15", note: "Top of rep is elbows at about ear level. Elbows lead the movement. Almost dragging barbell across torso." },
          { name: "Tricep Pushdown", sets: "3", reps: "15-20", note: "" },
          { name: "Behind the Head DB Extension", sets: "2", reps: "10-12", note: "Try to keep elbow in." },
          { name: "Abs #1", sets: "", reps: "", note: "Ab circuits are on the Ab Circuits tab!" },
        ],
      },
      {
        label: "Day 2 — Leg Day",
        exercises: [
          { name: "Squat Walks", sets: "3", reps: "10", note: "With resistance band if possible!" },
          { name: "Frog Pumps", sets: "2", reps: "12-15", note: "Today we are pre-exhausting our glute muscles before our heavy movements!" },
          { name: "Abductor", sets: "3", reps: "15-20", note: "Glutes totally exhausted now before we do our heavy presses!" },
          { name: "Leg Press", sets: "3", reps: "12", note: "Shorter rest time than you are used to. Give that 3rd set everything you've got!" },
          { name: "Goblet Squats", sets: "3", reps: "10-12", note: "Love going heavy on these even if I have to rest the weight on the floor between the last few reps!" },
          { name: "BB RDL", sets: "3", reps: "12-15", note: "Hamstring stretch, straight back, sticking hips back as far as possible, weight on heels!" },
        ],
      },
      {
        label: "Day 3 — Back/Bicep",
        exercises: [
          { name: "Lat Pulldown", sets: "3", reps: "10-12", note: "Try to use a different grip option from normal if you can." },
          { name: "BB Bent Over Row", sets: "3", reps: "10-12", note: "Strong and straight back." },
          { name: "Seated Cable Row", sets: "3", reps: "12-15", note: "1 second pause at peak of rep on first 3 reps each set." },
          { name: "Rope Pulls", sets: "2", reps: "15", note: "Hard back squeeze at peak and open up shoulder blades at bottom!" },
          { name: "DB or BB Curl", sets: "2", reps: "20", note: "Biceps were hit with heavy weight during your back training. Finish them off with some higher reps." },
          { name: "Hammer Curl", sets: "2", reps: "15-20", note: "" },
          { name: "Abs #3", sets: "", reps: "", note: "Ab circuits are on the Ab Circuits tab!" },
        ],
      },
    ],
  },
  6: {
    days: [
      {
        label: "Day 1 — Legs (Quad & Calves)",
        exercises: [
          { name: "Walking Lunges", sets: "2", reps: "8-10", note: "Bodyweight, holding DB or BB on back." },
          { name: "BB Squat", sets: "3", reps: "10", note: "If this is your first time squatting, take your time. Ask a trainer for assistance if needed." },
          { name: "Leg Press", sets: "3", reps: "12-15", note: "Drop set on last set. Quickly stand up, lower the weight in half, finish reps until failure." },
          { name: "Leg Extension", sets: "3", reps: "12-15", note: "Finish strong!" },
          { name: "Calf Press on Leg Press or Platform", sets: "3", reps: "15", note: "" },
        ],
      },
      {
        label: "Day 2 — Upper Body",
        exercises: [
          { name: "Knee Pushups", sets: "3", reps: "Until Failure", note: "" },
          { name: "Side Lateral SS Front DB Raise", sets: "3", reps: "12", note: "" },
          { name: "Upright Row", sets: "2", reps: "15", note: "Top of rep is elbows at about ear level. Barbell is almost dragging across body." },
          { name: "Bent Over BB Row", sets: "3", reps: "12-15", note: "Heavy movement. Big calorie burner. Push yourself with these! Safely." },
          { name: "Tricep Overhead Extension SS Rope Curl", sets: "3", reps: "12-15", note: "One of my favorite arm supersets!" },
          { name: "Abs #1", sets: "", reps: "", note: "Ab circuits are on the Ab Circuits tab!" },
        ],
      },
      {
        label: "Day 3 — Legs (Glute & Ham)",
        exercises: [
          { name: "Abductor", sets: "3", reps: "15-20", note: "" },
          { name: "Goblet Squat", sets: "3", reps: "15", note: "Fast paced reps! Pushing through heels, don't lockout knees." },
          { name: "Hip Thrust", sets: "3", reps: "10", note: "2 second pause and glute squeeze at top of each rep!" },
          { name: "Lower Back Extension", sets: "3", reps: "15", note: "Remember, focusing on hamstrings and glutes, not lower back muscles!" },
          { name: "Hamstring Curl", sets: "3", reps: "12", note: "2 second pause/squeeze at peak of each rep!" },
        ],
      },
    ],
  },
  7: {
    days: [
      {
        label: "Day 1 — Back/Biceps",
        exercises: [
          { name: "Lat Pulldown", sets: "3", reps: "12-15", note: "" },
          { name: "Bent Over BB Row", sets: "3", reps: "12-15", note: "" },
          { name: "DB Row", sets: "2", reps: "10", note: "Back to back each side no rest!" },
          { name: "Rope Pulls", sets: "3", reps: "15-20", note: "Hard shoulder blade squeeze at peak of rep!" },
          { name: "BB or DB Curl", sets: "2", reps: "12", note: "" },
          { name: "BB or DB Curl (burnout)", sets: "1", reps: "20", note: "Fast paced light weight burn to finish those biceps!" },
          { name: "Hammer Curl", sets: "2", reps: "20-25", note: "" },
          { name: "Abs #2", sets: "", reps: "", note: "Ab circuits are on the Ab Circuits tab!" },
        ],
      },
      {
        label: "Day 2 — Leg Day",
        exercises: [
          { name: "Squat Walks SS Kick Backs", sets: "2", reps: "10", note: "" },
          { name: "Walking Lunges", sets: "2", reps: "10", note: "" },
          { name: "BB Squat", sets: "4", reps: "10-15", note: "Staple exercise. Burns a ton of calories and hits so many muscle groups!" },
          { name: "BB RDL", sets: "3", reps: "15", note: "Hard glute squeeze at top of rep!" },
          { name: "Hamstring Curl", sets: "3", reps: "15", note: "First 3 reps, hold at peak for 2 seconds." },
          { name: "Abductor", sets: "2", reps: "35", note: "Glute finisher!" },
        ],
      },
      {
        label: "Day 3 — Chest/Shoulder/Tricep",
        exercises: [
          { name: "Knee Pushups", sets: "3", reps: "Until Failure", note: "" },
          { name: "Incline DB Press", sets: "3", reps: "12-15", note: "Heavy dumbbells to blast that upper chest, front shoulder, armpit area!" },
          { name: "Side Lateral", sets: "3", reps: "12-15", note: "" },
          { name: "Upright Row", sets: "3", reps: "15", note: "" },
          { name: "Tricep Pushdown", sets: "3", reps: "12-15", note: "Dropset on last set!" },
          { name: "Abs #3", sets: "", reps: "", note: "Ab circuits are on the Ab Circuits tab!" },
        ],
      },
    ],
  },
  8: {
    days: [
      {
        label: "Day 1 — Legs (Glute & Ham)",
        exercises: [
          { name: "Squat Walks SS Kick Backs", sets: "2", reps: "10", note: "With resistance band!" },
          { name: "Abductor Machine", sets: "3", reps: "20", note: "" },
          { name: "Leg Press", sets: "4", reps: "10-15", note: "High and wide foot placement. Pushing with heels. If you feel comfortable, use a heavier weight than you are used to!" },
          { name: "DB RDL", sets: "3", reps: "12-15", note: "" },
          { name: "Hamstring Curl", sets: "3", reps: "8", note: "Hold first 4 reps at peak for 3 seconds!" },
        ],
      },
      {
        label: "Day 2 — Upper Body",
        exercises: [
          { name: "Knee Pushups", sets: "3", reps: "Until Failure", note: "" },
          { name: "Incline DB Press", sets: "3", reps: "12-15", note: "You are using so many muscles while stabilizing those heavy dumbbells!" },
          { name: "Seated Cable Row", sets: "3", reps: "12-15", note: "Set a personal strength record!" },
          { name: "Upright Row", sets: "2", reps: "15-20", note: "" },
          { name: "Behind the Head DB Extension", sets: "4", reps: "10", note: "Triceps/Biceps superset! Entire arm killer!" },
          { name: "Abs #1", sets: "", reps: "", note: "Ab circuits are on the Ab Circuits tab!" },
        ],
      },
      {
        label: "Day 3 — Legs (Quad & Calf)",
        exercises: [
          { name: "Walking Lunges", sets: "2", reps: "8", note: "Make sure to warm up a little extra since we are jumping right into lunges!" },
          { name: "Leg Extension", sets: "3", reps: "15", note: "Walking lunges + leg extension, you are all warmed up for heavy squats!" },
          { name: "BB Squat", sets: "4", reps: "10-15", note: "Heavy squat day! Take your time, quality over rushing on squats." },
          { name: "Goblet Squats", sets: "3", reps: "15-20", note: "Quick reps, pushing through heels, high rep goblets are killer!" },
          { name: "Single Leg Calf Press", sets: "3", reps: "15", note: "" },
        ],
      },
    ],
  },
  9: {
    days: [
      {
        label: "Day 1 — Chest/Shoulder/Tricep",
        exercises: [
          { name: "Knee Pushups", sets: "3", reps: "Until Failure", note: "Progress from week 1??" },
          { name: "Incline DB Flies", sets: "3", reps: "12-15", note: "Pretend you are hugging a tree!" },
          { name: "Overhead DB or BB Press", sets: "4", reps: "10-15", note: "Try using the barbell if you haven't yet!" },
          { name: "Upright Row", sets: "3", reps: "15", note: "" },
          { name: "Assisted Dip Machine or Tricep Pushdown", sets: "3", reps: "10-12", note: "Dropset on last 2 sets!" },
          { name: "Abs #2", sets: "", reps: "", note: "Ab circuits are on the Ab Circuits tab!" },
        ],
      },
      {
        label: "Day 2 — Lower Body",
        exercises: [
          { name: "Squat Walks SS Lower Back Extension", sets: "3", reps: "10", note: "Glute slayer!" },
          { name: "Abductor", sets: "3", reps: "15", note: "" },
          { name: "BB Squat", sets: "3", reps: "8-12", note: "Set a heavy weight personal record on last set of 8 if you feel comfortable!" },
          { name: "DB or BB RDL", sets: "3", reps: "15", note: "Deep hamstring stretch!" },
          { name: "Hamstring Curl", sets: "3", reps: "12", note: "Dropset on last 2 sets!" },
        ],
      },
      {
        label: "Day 3 — Back/Bicep",
        exercises: [
          { name: "Lat Pulldown", sets: "3", reps: "12-15", note: "Hard contraction at bottom. At top, open up back and feel that stretch!" },
          { name: "BB Bent Over Row", sets: "3", reps: "8", note: "Lower rep, heavier weight!" },
          { name: "DB Row", sets: "3", reps: "10-12", note: "" },
          { name: "BB or DB Curl", sets: "2", reps: "15", note: "" },
          { name: "BB or DB Curl (Slow)", sets: "2", reps: "6-8", note: "Same weight as higher rep sets but VERY slow." },
          { name: "Hammer Curl", sets: "2", reps: "20", note: "Light weight, fast reps!" },
          { name: "Abs #3", sets: "", reps: "", note: "Ab circuits are on the Ab Circuits tab!" },
        ],
      },
    ],
  },
};

const abCircuits = [
  {
    title: "Ab Circuit #1 — 3x",
    exercises: [
      { name: "Plank", note: "Always time yourself, keep track of progress!" },
      { name: "Leg Lifts", note: "Slow and controlled reps." },
      { name: "Crunches", note: "Feel free to put feet under a couch or your dog!" },
    ],
  },
  {
    title: "Ab Circuit #2 — 3x",
    exercises: [
      { name: "Leg Lifts", note: "Leg lifts before planks really hits my lower tummy!" },
      { name: "Side Plank", note: "2 rotations — alternating each side, no breaks all three sets." },
      { name: "Russian Twists", note: "" },
    ],
  },
  {
    title: "Ab Circuit #3 — 3x",
    exercises: [
      { name: "Leg Scissors", note: "" },
      { name: "Plank", note: "" },
      { name: "Heel Touches", note: "Alternating side to side." },
    ],
  },
];

export default function App() {
  const [week, setWeek] = useState(1);
  const [day, setDay] = useState(0);
  const [tab, setTab] = useState("workout");

  const weekData = workouts[week];
  const dayData = weekData.days[day];

  const styles = {
    app: {
      minHeight: "100vh",
      background: "#fff5f8",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#1a1a2e",
    },
    header: {
      background: "linear-gradient(135deg, #f9a8c9 0%, #f472b6 100%)",
      padding: "24px 20px 20px",
      textAlign: "center",
    },
    headerTitle: {
      fontSize: "26px",
      fontWeight: "700",
      color: "#fff",
      margin: "0 0 4px",
      letterSpacing: "-0.5px",
    },
    headerSub: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.85)",
      margin: 0,
    },
    container: {
      maxWidth: "480px",
      margin: "0 auto",
      padding: "16px",
    },
    tabRow: {
      display: "flex",
      gap: "8px",
      margin: "16px 0",
    },
    tabBtn: (active) => ({
      flex: 1,
      padding: "10px",
      border: active ? "2px solid #f472b6" : "1.5px solid #f9a8c9",
      borderRadius: "10px",
      background: active ? "#fce7f3" : "#fff",
      color: active ? "#be185d" : "#9d174d",
      fontSize: "13px",
      fontWeight: active ? "600" : "400",
      cursor: "pointer",
    }),
    card: {
      background: "#fff",
      border: "1px solid #fce7f3",
      borderRadius: "14px",
      padding: "16px",
      marginBottom: "10px",
      boxShadow: "0 1px 4px rgba(244,114,182,0.08)",
    },
    weekSelect: {
      width: "100%",
      padding: "12px 14px",
      border: "1.5px solid #f9a8c9",
      borderRadius: "12px",
      background: "#fff",
      color: "#be185d",
      fontSize: "15px",
      fontWeight: "500",
      marginBottom: "12px",
      cursor: "pointer",
      outline: "none",
    },
    dayTabs: {
      display: "flex",
      gap: "8px",
      marginBottom: "16px",
    },
    dayTab: (active) => ({
      flex: 1,
      padding: "9px 4px",
      border: active ? "2px solid #f472b6" : "1.5px solid #fce7f3",
      borderRadius: "10px",
      background: active ? "#f472b6" : "#fff",
      color: active ? "#fff" : "#be185d",
      fontSize: "12px",
      fontWeight: active ? "600" : "400",
      cursor: "pointer",
      textAlign: "center",
    }),
    exNum: {
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      background: "#fce7f3",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "13px",
      fontWeight: "600",
      color: "#be185d",
      flexShrink: 0,
    },
    exName: {
      fontSize: "15px",
      fontWeight: "600",
      color: "#1a1a2e",
      marginBottom: "4px",
    },
    badge: {
      display: "inline-block",
      background: "#fce7f3",
      color: "#be185d",
      fontSize: "12px",
      padding: "3px 10px",
      borderRadius: "20px",
    },
    note: {
      marginTop: "10px",
      padding: "8px 12px",
      background: "#fff5f8",
      borderRadius: "8px",
      fontSize: "13px",
      color: "#6b7280",
      borderLeft: "3px solid #f9a8c9",
    },
    sectionLabel: {
      fontSize: "11px",
      fontWeight: "600",
      color: "#be185d",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      margin: "4px 0 12px",
    },
    keyRow: {
      display: "flex",
      gap: "6px",
      flexWrap: "wrap",
      marginBottom: "16px",
    },
    keyPill: {
      background: "#fce7f3",
      border: "1px solid #f9a8c9",
      borderRadius: "20px",
      padding: "4px 12px",
      fontSize: "12px",
      color: "#9d174d",
    },
    abCol: {
      flex: 1,
      background: "#fff5f8",
      borderRadius: "10px",
      padding: "12px",
      minWidth: "120px",
    },
    abColTitle: {
      fontSize: "12px",
      fontWeight: "600",
      color: "#be185d",
      marginBottom: "8px",
    },
    abEx: {
      fontSize: "12px",
      color: "#374151",
      padding: "5px 0",
      borderBottom: "1px solid #fce7f3",
    },
    abNote: {
      fontSize: "11px",
      color: "#9ca3af",
      fontStyle: "italic",
      marginTop: "2px",
    },
    restCard: {
      background: "#fce7f3",
      borderRadius: "12px",
      padding: "14px 16px",
      marginTop: "16px",
    },
    restTitle: {
      fontSize: "13px",
      fontWeight: "600",
      color: "#be185d",
      marginBottom: "8px",
    },
    restItem: {
      fontSize: "12px",
      color: "#9d174d",
      marginBottom: "4px",
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Fit with Mari 🌸</h1>
        <p style={styles.headerSub}>3 Days a Week · Gym Program · 9 Weeks</p>
      </div>

      <div style={styles.container}>
        <div style={styles.tabRow}>
          {["workout", "abs", "info"].map((t) => (
            <button key={t} style={styles.tabBtn(tab === t)} onClick={() => setTab(t)}>
              {t === "workout" ? "💪 Workouts" : t === "abs" ? "🔥 Ab Circuits" : "ℹ️ Info"}
            </button>
          ))}
        </div>

        {tab === "workout" && (
          <>
            <div style={styles.keyRow}>
              {["BB = Barbell", "DB = Dumbbell", "SS = Super Set", "RDL = Romanian Deadlift", "DS = Drop Set"].map((k) => (
                <span key={k} style={styles.keyPill}>{k}</span>
              ))}
            </div>

            <select style={styles.weekSelect} value={week} onChange={(e) => { setWeek(Number(e.target.value)); setDay(0); }}>
              {[1,2,3,4,5,6,7,8,9].map((w) => (
                <option key={w} value={w}>Week {w}</option>
              ))}
            </select>

            <div style={styles.dayTabs}>
              {weekData.days.map((d, i) => (
                <button key={i} style={styles.dayTab(day === i)} onClick={() => setDay(i)}>
                  Day {i + 1}
                </button>
              ))}
            </div>

            <div style={styles.sectionLabel}>{dayData.label}</div>

            {dayData.exercises.map((ex, i) => {
              const isAbs = ex.name.toLowerCase().startsWith("abs");
              return (
                <div key={i} style={styles.card}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={styles.exNum}>{i + 1}</div>
                    <div style={{ flex: 1 }}>
                      <div style={styles.exName}>{ex.name}</div>
                      {!isAbs && ex.sets && (
                        <span style={styles.badge}>{ex.sets} sets · {ex.reps} reps</span>
                      )}
                    </div>
                  </div>
                  {ex.note ? <div style={styles.note}>{ex.note}</div> : null}
                </div>
              );
            })}
          </>
        )}

        {tab === "abs" && (
          <>
            <div style={styles.sectionLabel}>Ab Circuits — Do after your workout</div>
            <div style={styles.card}>
              <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: "14px" }}>
                Always take these movements to failure. Try to circuit them 3 times! Do abs after the workout as a separate circuit.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {abCircuits.map((circuit, ci) => (
                  <div key={ci} style={styles.abCol}>
                    <div style={styles.abColTitle}>{circuit.title}</div>
                    {circuit.exercises.map((ex, ei) => (
                      <div key={ei} style={styles.abEx}>
                        <div>{ex.name}</div>
                        {ex.note && <div style={styles.abNote}>{ex.note}</div>}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === "info" && (
          <>
            <div style={styles.sectionLabel}>Rest Times by Goal</div>
            <div style={styles.restCard}>
              <div style={styles.restTitle}>Choose your rest time based on your goal:</div>
              <div style={styles.restItem}>🔥 Fat loss: 30 seconds between sets</div>
              <div style={styles.restItem}>💪 Muscle gain: ~1 minute between sets</div>
              <div style={styles.restItem}>⚡ Both: 30–60 seconds between sets</div>
            </div>

            <div style={styles.sectionLabel} style={{ marginTop: "16px" }}>Abbreviation Key</div>
            <div style={styles.card}>
              {[["BB","Barbell"],["DB","Dumbbell"],["SS","Super Set — two exercises back to back with no rest"],["RDL","Romanian Deadlift"],["DS","Drop Set — after failure, cut weight in half and keep going"]].map(([k,v]) => (
                <div key={k} style={{ display: "flex", gap: "12px", padding: "8px 0", borderBottom: "1px solid #fce7f3", fontSize: "13px" }}>
                  <span style={{ fontWeight: "600", color: "#be185d", minWidth: "36px" }}>{k}</span>
                  <span style={{ color: "#6b7280" }}>{v}</span>
                </div>
              ))}
            </div>

            <div style={styles.sectionLabel} style={{ marginTop: "16px" }}>Mari's Tips</div>
            <div style={styles.card}>
              {[
                "Remember to push yourself! Those last couple of reps are the ones that really count!",
                "Always warm up 10 minutes before your workout — stairmaster, treadmill, or arm swings + stretches.",
                "Use the heaviest weight you can while keeping proper form.",
                "If you can easily exceed the rep range, it's time to increase the weight!",
                "Take progress photos — you'll see more results in the mirror than on the scale.",
              ].map((tip, i) => (
                <div key={i} style={{ fontSize: "13px", color: "#6b7280", padding: "8px 0", borderBottom: i < 4 ? "1px solid #fce7f3" : "none" }}>
                  <span style={{ color: "#f472b6", marginRight: "8px" }}>✦</span>{tip}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
