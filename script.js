const courseContent = document.getElementById('course-content');
const courseTitle = document.getElementById('course-title');

// Get the course name from the URL (e.g., ?course=webdev)
const urlParams = new URLSearchParams(window.location.search);
const course = urlParams.get('course');

// Define courses and their corresponding YouTube links
const courses = {
    webdev: {
        title: "Web Development",
        videos: [
            { title: "HTML Basics", url: "https://www.youtube.com/embed/HcOc7P5BMi4?si=4WlbRO5CULC988dD" },
            { title: "CSS Fundamentals", url: "https://www.youtube.com/embed/ESnrn1kAD4E?si=ObMw158eGK9ShoF9" },
            { title: "JavaScript Programming", url: "https://www.youtube.com/embed/VlPiVmYuoqw?si=4Rl8ARz02ufb8AQi" }
        ]
    },

    datascience: {
        title: "Python for Data Science",
        videos: [
            { title: "Python Basics", url: "https://www.youtube.com/embed/vLqTf2b6GZw?si=v0MGcJTW6MIh4gLA"  },
            { title: "Data Science Libraries", url: "https://www.youtube.com/embed/Ee8dDnwq374?si=RlUCQ6En6Q8oK8zX"   },
            { title: "Machine Learning with Python", url: "https://www.youtube.com/embed/c8W7dRPdIPE?si=Sa8pJg1FXcwyxCwD"  }
        ]
    },
    
    cybersecurity: {
        title: "Cybersecurity",
        videos: [
            { title: "Introduction to Cybersecurity", url: "https://www.youtube.com/embed/z5nc9MDbvkw?si=oD10Mdv8rwrSAeNW"  },
            { title: "Ethical Hacking", url: "https://www.youtube.com/embed/dz7Ntp7KQGA?si=O2hfN7ucLgV27kJR"  },
            { title: "Security Certifications", url: "https://www.youtube.com/embed/M1_v5HBVHWo?si=wT81r0mjoTI2YPTn"  }
        ]
    },

    aws: {
        title: "Cloud Computing",
        videos: [
            { title: "AWS Cloud", url: "https://www.youtube.com/embed/NhDYbskXRgc?si=UomT_bHYdA63cylZ"  },
            { title: "Microsoft Azure", url: "https://www.youtube.com/embed/5abffC-K40c?si=eJSeyZLU6jVwCZq1"  },
            { title: "Google Cloud PLatform", url: "https://www.youtube.com/embed/vACTtmLWiQY?si=vTMF_C2YpKqN3uVs"  }
        ]
    },

    networking: {
        title: "Networking Essentials",
        videos: [
            { title: "Networking Fundamentals", url:"https://www.youtube.com/embed/n2D1o-aM-2s?si=M8_tmcVCo54NmoQL"   },
            { title: "Network Devices", url: "https://www.youtube.com/embed/0pMm_QxCg3I?si=GkqxnSbbBE8m20e7"  },
            { title: "Network Security", url: "https://www.youtube.com/embed/zIWGjkr0ENE?si=k3eMnXaxsCcQthb3"  }
        ]
    }
};

// Set the course title
if (courses[course]) {
    courseTitle.innerText = courses[course].title;
    
    // Display each video
    courses[course].videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <iframe width="560" height="315" src="${video.url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        `;
        courseContent.appendChild(videoElement);
    });
} else {
    courseContent.innerHTML = "<p>Course not found!</p>";
}
