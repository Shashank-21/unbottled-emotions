import { createSlice, nanoid } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
  name: "blogs",
  initialState: [
    {
      id: nanoid(),
      title: "People-pleasing 101",
      synopsis:
        "People-pleasing is affecting your life in more ways than you can recognize. A hard truth to remember: You cannot make everyone happy. It’s not your job.",
      elaborate:
        "People-pleasing is affecting your life in more ways than you can recognize. A hard truth to remember: You cannot make everyone happy. It’s not your job. Remaining silent even when you disagree is not a recipe for healthy relationships. You will end up feeling disappointed and remorseful. People pleasers often start as parent pleasers- @mindmattersmhc. Our first roles generally become models of how we act and behave in relationships. As humans, we inherently seek love and recognition. In the process of doing so, we abandon our own needs and forget to set boundaries. Just a gentle reminder to recognize: Are you a people-pleaser? How have people-pleasing contributed to your life? People-pleasing is not kindness. We often repeat what we don’t repair. We tend to repeat unhealthy or unhelpful patterns/ habits in our relationships & life because we don’t spend enough time unlearning them. Acknowledge what is not working for you/ has caused more damage; then try replacing it with something helpful or functional. Practice saying NO more often. You will only lose people who don’t understand your boundaries or respect your energy. Expecting something different while doing the same thing is not feasible. Repairing is a process. Feedback from people you trust helps in better understanding what it is that you need to work on. Some prompts: Is there a specific behavior that is causing you harm? Do you often get stuck in the same loop with your relationships? What are some steps you can take to move away from this pattern? As therapists like to say, “The only way out is through”. Yes, you can be kind and still honor your boundaries, feel angry at times, say no to things that drain you, and have a different opinion from others. You don’t have to minimize yourself. It’s okay to be kind and still be a human who has needs. People pleasing in relationships- You can love your relationships and still cherish alone time. Allow yourself to be in the gray area. We need moments of connection and disengagement. Plus, it’s unrealistic to expect our partners to always be available. It’s important to have rituals of connection but, at the same time nurture a healthy relationship with yourself. You are not one-dimensional. I'm leaving you with a final thought. If you ever wonder- Am I people-pleasing or just genuinely trying to make the other person happy? The answer is you engage in a people-pleasing cycle at your own expense (physical, mental, and emotional) whereas, in the latter, you are not betraying yourself to make other people happy. Make this a rule anytime you see yourself struggling.",
    },
    {
      id: nanoid(),
      title: "Interpersonal relationships",
      synopsis:
        "Relational difficulties begin when we get caught in who is right or wrong/ wins or loses. It is helpful to focus on the meaning we attach to the facts.",
      elaborate:
        "Relational difficulties begin when we get caught in who is right or wrong/ wins or loses. It is helpful to focus on the meaning we attach to the facts. To not get caught in the content, try exploring the meaning you or your partner are connecting to these facts. Example: One partner complaining about not getting enough attention: The partner might turn to the silent treatment, fights, name-calling, etc. At ground level, Xyz could be feeling unloved, hurt, disappointed, etc. A considerate way to respond is to understand the meaning and feeling behind these conflicts. What helps is to create space for the person and their emotion and make each other feel heard, seen, and acknowledged, even during conflicts. I feel supported by my partner, and I felt disappointed by them last week. Two contradictory things can exist at the same time. Sometimes, it might be hard for us to accept both truths. Although, it’s liberating to make space for them to exist at one time and then decide what’s best for us. As I write this, I’m also thinking about a similar experience where making peace with the fact that my loved ones are supportive and sometimes might not know the best way to support me proved to be a breakthrough. Intimacy and attraction work in ebbs and flows. Sometimes there can be an ebb where a relationship might feel stagnant. It’s okay to experience disconnection, even in healthy relationships. What is not okay; is to avoid these feelings and get lost in ebbs. Exploring how you can re-engage with your partner to spark your relationship can be a crucial step here. Insecurities can stem from various layers of our past experiences, how we perceive ourselves, or self-worth. Being able to talk about your ingrained feelings and keeping them separate from the facts is a crucial relational skill. Acknowledge the story; we create in our heads while also focusing on what is right in front of us. It prevents us from getting struck by the same pattern of blame and guilt. We can then move towards validation, coregulation, and safety in relationships. John Gottman talks about a love tank where you check in with each other to see if the tank is full or needs refilling. Pay attention to your partner’s bid for connection. Many times, they will turn towards you for moments of connection. We live in a busy world where it is not always possible; to respond every time there is a bid. Gottman says happy couples should at least respond 7 out of 10 times when their partner turns towards them for connection. Validate their feelings; be curious about what they are experiencing in the relationship. Your partner is also experiencing the ebb in the relationship. Be curious about your partner’s feelings; use a soothing voice and gentle touch to make them feel emotionally safe. Check each other’s love tank and do things to fill it up. Show appreciation by doing small things for them. Speak your partner’s love language to fill up their love tank. Start your relationship ritual for re-engagement. Taking out intentional time to share affection and appreciation towards your partner is required for a healthy relationship to thrive. Research shows spending intentional time deepens connections. Finding support in complex situations where we can accept and make space for things along the same lines. I hope this puts you at ease. I dare you to repeat this, “Relationships are mixed elements. I allow myself to feel two things at a time. I cannot narrow them in black or white”.",
    },
  ],
  reducers: {
    captureBlogs(state, action) {
      if (!state.length && action.payload) {
        state.push(...action.payload);
      } else {
        return state;
      }
    },
    changeBlog(state, action) {
      return state.map((faq) => {
        if (faq.id === action.payload.id) return { ...faq, ...action.payload };
        else {
          return faq;
        }
      });
    },
    addBlog(state, action) {
      return [...state, { id: nanoid(), ...action.payload }];
    },
  },
});

export const { changeBlog, addBlog, captureBlogs } = blogsSlice.actions;
export const blogsReducer = blogsSlice.reducer;
