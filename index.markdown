---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home

---


<div class="intro-section">
  <h1>Hi! <span role="img" aria-label="wave">👋</span> I'm Enqi</h1>
  <div id="image-container" class="center-image" style="width: 100%; display: flex; justify-content: center; align-items: center;">
    <img src="{{ site.baseurl }}/images/100_3063.JPEG" alt="Enqi Jing" class="profile-image" style="width: 500px; height: 300px; object-fit: cover;">
</div>



  <div class="intro-text">
    <h1>Who is this guy?</h1>
    <p>I'm a Computer Science and Predictive Modelling Master (MSc) at the <a href="https://warwick.ac.uk/">University of Warwick</a>.</p>
    <p>I like to solve complicated questions <span role="img" aria-label="thinking">🔢</span>, think about the principles of each type <span role="img" aria-label="thought balloon">💭</span>, imagine how machines would learn like humans <span role="img" aria-label="thinking face">🤔</span>. Can they read interesting novels and magazines and have critical thinking <span role="img" aria-l
    abel="books">📚</span>?</p>
    <p>So basically, thinking-based learning and machine learning.</p>
    <p>My CV is on the 'About' page <span role="img" aria-label="nerd face">🤓</span>. You can judge me by my projects and internship experiences.</p>
  </div>
</div>


<head>
  <link rel="icon" href="{{ site.favicon | relative_url }}" type="image/jpeg">
  <link rel="shortcut icon" href="{{ site.favicon | relative_url }}" type="image/jpeg">
</head>



<!-- CSS -->
<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f9a826;
  margin: 10px;
  padding: 0;
  text-align: center;
}

.intro-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110vh;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

h1 .highlight {
  text-decoration: underline wavy #001; /* Apply wavy underline */
}
s
.center-image {
  margin-top: 100px;
  margin-bottom: 50px;
}

.profile-image {
  width: 100%;
  border-radius: 20%;
}

.intro-text {
  background-color: #ff6347;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 10px auto;
}

.intro-text h2 {
  font-size: 2rem;
  margin-bottom: 5rem;
}

.intro-text p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>