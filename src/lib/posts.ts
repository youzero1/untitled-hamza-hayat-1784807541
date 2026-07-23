export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  cover: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: 'the-quiet-craft-of-writing-well',
    title: 'The Quiet Craft of Writing Well',
    excerpt:
      'Good writing rarely announces itself. It clears its throat, offers you a chair, and gets out of your way.',
    content: [
      'There is a particular kind of silence that lives inside a well-written sentence. Not the absence of sound, exactly, but the absence of struggle. The words have already done their arguing before they reached you.',
      'I used to think good writing was about finding the right words. Now I think it is mostly about removing the wrong ones. A first draft is a landscape you have not yet walked through; the second is the trail you leave for the reader.',
      'The best essays I have read never told me what to think. They pointed at something, quietly, and waited to see if I would notice it too. That patience is the whole craft, really — the willingness to trust the reader with the meaning.',
      'If you are learning to write, learn to cut. Cut adverbs first. Then cut sentences that only exist to sound clever. Then cut the paragraph you were most proud of — you were proud of it because it was showing off, and showing off is the enemy of clarity.',
    ],
    author: 'Elena Marsh',
    authorRole: 'Editor',
    date: 'March 12, 2025',
    readTime: '6 min read',
    category: 'Craft',
    cover: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80',
    tags: ['writing', 'craft', 'essays'],
  },
  {
    slug: 'a-year-of-slow-mornings',
    title: 'A Year of Slow Mornings',
    excerpt:
      'What I learned after twelve months of refusing to open my laptop before the coffee was cold.',
    content: [
      'It started as an accident. My charger broke in early January and I could not be bothered to order a new one for a week. In those seven mornings, I read three books, wrote in a notebook I had forgotten I owned, and watched the light change on the kitchen wall.',
      'I did not become more productive. That is important. I became something better than productive — I became present. The two things get confused often, but they are not the same.',
      'A slow morning is not a lazy morning. It is a deliberate one. You are choosing, minute by minute, what deserves your attention before the world starts making that choice for you.',
    ],
    author: 'Jonah Reeve',
    authorRole: 'Contributor',
    date: 'February 28, 2025',
    readTime: '4 min read',
    category: 'Living',
    cover: 'https://images.unsplash.com/photo-1495197359483-d092478c170a?w=1600&q=80',
    tags: ['habits', 'mornings', 'reflection'],
  },
  {
    slug: 'letters-from-a-small-bookshop',
    title: 'Letters from a Small Bookshop',
    excerpt:
      'On selling used paperbacks in a town of four thousand people, and the strangers who become regulars.',
    content: [
      'The shop is thirty-two feet deep and eleven feet wide. There are six thousand books in it, give or take, and I know roughly where each of them lives. I do not have a computer at the register. People find this charming until they want to know if I have something in stock.',
      'Mrs. Alder comes in every Thursday for a mystery. She has been reading mysteries for sixty-one years and has opinions. I keep a shelf behind the counter of ones I think she has not read yet. I am usually wrong twice a month.',
      'A bookshop is not really a business. It is a slow conversation with a town, conducted in paperbacks.',
    ],
    author: 'Ruth Callahan',
    authorRole: 'Guest writer',
    date: 'February 14, 2025',
    readTime: '5 min read',
    category: 'Places',
    cover: 'https://images.unsplash.com/photo-1521123845560-14093637aa7d?w=1600&q=80',
    tags: ['bookshops', 'small towns', 'community'],
  },
  {
    slug: 'notes-on-keeping-a-notebook',
    title: 'Notes on Keeping a Notebook',
    excerpt:
      'Not a journal. Not a bullet planner. Just a small book you carry, and what it does to your attention.',
    content: [
      'A notebook is not a record of what happened. It is a record of what you noticed. Two people can walk down the same street on the same morning and fill two entirely different pages.',
      'I have kept one since I was nineteen. The early ones are embarrassing. The middle ones are boring. The recent ones are, I think, honest — which is the best you can hope for.',
    ],
    author: 'Elena Marsh',
    authorRole: 'Editor',
    date: 'January 30, 2025',
    readTime: '3 min read',
    category: 'Craft',
    cover: 'https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?w=1600&q=80',
    tags: ['notebooks', 'writing', 'attention'],
  },
  {
    slug: 'the-case-for-boring-hobbies',
    title: 'The Case for Boring Hobbies',
    excerpt:
      'In defense of things that will never become a side hustle, a personal brand, or a productivity system.',
    content: [
      'I collect stamps. I know how that sounds. I have been collecting them since I was eleven and I have never once thought about monetizing it, growing an audience around it, or optimizing my workflow.',
      'A boring hobby is a room in your life that the market cannot enter. That is why it is precious. That is the entire point.',
    ],
    author: 'Marcus Ehrlich',
    authorRole: 'Contributor',
    date: 'January 18, 2025',
    readTime: '4 min read',
    category: 'Living',
    cover: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80',
    tags: ['hobbies', 'attention', 'anti-hustle'],
  },
  {
    slug: 'what-the-river-remembers',
    title: 'What the River Remembers',
    excerpt:
      'A walk along a small waterway in the north of England, and the geology of its patience.',
    content: [
      'The river is older than every argument you have ever had. It is older than the road that follows it, older than the wall that leans against it, older than the language we use to name it.',
      'To walk beside a river for a long enough afternoon is to be quietly outnumbered by time.',
    ],
    author: 'Priya Anand',
    authorRole: 'Contributor',
    date: 'January 4, 2025',
    readTime: '7 min read',
    category: 'Places',
    cover: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=80',
    tags: ['nature', 'walking', 'geology'],
  },
];

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug);
