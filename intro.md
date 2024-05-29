---
layout: page
title: Profiles
permalink: /profiles/
---

<div style="text-align: center;">
    <img id="profile-pic" src="{{ '/images/profile_picture.JPG' | relative_url }}" alt="Profile Picture" style="width: 400px; border-radius: 100%;">
</div>

<h2 class="fade-in" style="color: #2c3e50;">Education Background</h2>
<p class="fade-in">I am currently pursuing a Master's degree in Predictive Modelling and Scientific Computing at the University of Warwick, Engineering School.</p>

<h2 class="fade-in" style="color: #2c3e50;">Research Interests</h2>
<p class="fade-in">My primary research interests lie in the fields of machine learning and deep learning, with a strong focus on data science. I am particularly interested in the intersection of numerical analysis and machine learning techniques.</p>

<h2 class="fade-in" style="color: #2c3e50;">Professional Experience</h2>
<p class="fade-in">I have previously worked as a Research Intern at Warwick Manufacturing Group (WMG), where I conducted research on Vehicle-to-Grid (V2G) technology, exploring the cybersecurity and potential risks associated with automotive-to-grid interactions.</p>

<h2 class="fade-in" style="color: #2c3e50;">Research Projects</h2>
<ul class="fade-in">
    <li><strong>Leverage ML on Aluminium Parameters Optimization and Data Analysis:</strong> Developed predictive models using machine learning techniques to optimize aluminum processing parameters.</li>
    <li><strong>Location Extraction and Movement Prediction Using Deep Learning:</strong> Utilized deep learning models with self-attention mechanisms for location extraction and movement prediction, based on data from Microsoft Research Asia.</li>
    <li><strong>Group Project: Web App Development:</strong> Developed a web application using Java Spring Boot and React technologies.</li>
    <li><strong>Group Project: Predictive Modelling for Satellite De-orbiting:</strong> Implemented predictive modeling for satellite de-orbiting using an Extended Kalman Filter and developed a graphical user interface (GUI) using PyQt6.</li>
</ul>

<h2 class="fade-in" style="color: #2c3e50;">Technical Skills</h2>
<ul class="fade-in">
    <li><strong>Programming Languages:</strong> Python, PostgreSQL, Java, C++</li>
    <li><strong>Machine Learning Frameworks and Libraries:</strong> scikit-learn, PyTorch, NumPy, pandas</li>
    <li><strong>Code Documentation Tools:</strong> Sphinx</li>
</ul>

<!-- CSS -->
<style>
    .fade-in {
        opacity: 0;
        animation: fadeInAnimation 0.6s forwards;
    }

    @keyframes fadeInAnimation {
        to {
            opacity: 1;
        }
    }
</style>

<!-- JavaScript -->
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.11}s`;
        });
    });
</script>
