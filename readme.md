1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

- getElementById: ID unique হতে হবে। একটি মাত্র element return করে। সবচেয়ে বেশি ব্যবহৃত হয়।
- getelementByClassName: HTML Colloection return করে। Live collection automatically update হয়। Loop করে প্রতিটি element access করতে হয়।
- querySelector / querySelectorAll: এখানে css selector ব্যবহার করা যায়। querySelector প্রথম element return করে। querySelectorAll nodelist return করে।

2. How do you **create and insert a new element into the DOM**?

- নতুন element তৈরি করা: const newDiv = document.createElement('div');
- নতুন element insert করা: first call the parent element then insert it
  const callHistory = document.getElementById("call-history");
  callHistory.appendChild(newDiv);

3. What is **Event Bubbling** and how does it work?

- Event Bubbling হলো যেখানে কোনো একটি ভেতরের এলিমেন্টে বা child element এ কোনো ইভেন্ট ঘটলে (যেমন: ক্লিক), সেই ইভেন্টটি প্রথমে ওই এলিমেন্টে কাজ করে, তারপর তার বাইরের এলিমেন্টে , তারপর তারও বাইরের এলিমেন্টে কাজ করে—এভাবে একদম উপরে document পর্যন্ত উঠতে থাকে।

এটি যেভাবে কাজ করে:

১. প্রথমে যে এলিমেন্টটিতে ক্লিক করা হয়েছে, সেটির ইভেন্ট লিসেনার কাজ করে।
২. এরপর তার parent এলিমেন্টের ইভেন্ট লিসেনার কাজ করে।
৩. এরপর তার grandparent এলিমেন্টের ইভেন্ট লিসেনার কাজ করে।
৪. এভাবে একদম document পর্যন্ত চলতে থাকে।

4. What is **Event Delegation** in JavaScript? Why is it useful?

- Event Delegation হলো এমন একটি কৌশল যেখানে অনেকগুলো child এলিমেন্টের জন্য আলাদা আলাদা ইভেন্ট লিসেনার যোগ না করে, শুধুমাত্র তাদের parent এলিমেন্টে একটিমাত্র ইভেন্ট লিসেনার যোগ করা। ফলে যখন কোনো child এলিমেন্টে ইভেন্ট ঘটে, তখন সেটি "bubble up" হয়ে parent পর্যন্ত পৌঁছায়। তখন parent-এর লিসেনারটি সেই ইভেন্টটি ধরে ফেলে এবং বুঝতে পারে ঠিক কোন child এলিমেন্টের ওপর ইভেন্টটি ঘটেছে।

- প্রয়োজনীয়তা:
১. এটি মেমোরি বাঁচায় কারণ অনেক গুলো ইভেন্ট লিসেনার ব্যবহার না করে, parent-এ মাত্র একটি লিসেনার ব্যবহার করে সব কাজ করা যায়।
২. JavaScript দিয়ে লিস্টে নতুন কোনো লিস্ট(li) যোগ করলে, তার জন্য নতুন করে কোনো লিসেনার যোগ করার প্রয়োজন নেই। যেহেতু লিসেনারটি parent-এর ওপর আছে, তাই এটি নতুন যুক্ত হওয়া সব child-এর জন্যও কাজ করবে।

5. What is the difference between **preventDefault() and stopPropagation()** methods?

- preventDefault() : এটি ব্রাউজারের ডিফল্ট আচরণকে বন্ধ করে। ফর্ম নিয়ে কাজ করার সময় preventDefault() ব্যবহার করে ফর্ম সাবমিট এর পেজ রিলোড হওয়া আটকে দেওয়া যায়।
  stopPropagation(): এটি ইভেন্টের প্রবাহকে উপরের দিকে অর্থ্যাৎparent এলিমেন্টে এর দিকে যাওয়া থেকে থামিয়ে দেয়। যখন একটি parent এবং child এলিমেন্ট উভয়ের মধ্যেই ক্লিক ইভেন্ট থাকে, কিন্তু যদি আমি চাই শুধু child-এর ইভেন্টটি কাজ করুক, parent-এরটা নয় তখন এটি ব্যবহার করবো।
