const LINKEDIN_LINK = "https://www.linkedin.com/in/victor-mira-56b255174/"
const GITHUB_LINK = "https://github.com/victor-mira"
const MAILTO = "mailto:victor.romain.mira@gmail.com"
const TEL = "tel:+33627246684"

const aboutMe = document.getElementById("front-text")
const linkedin = document.getElementById("linkedin")
const github = document.getElementById("github")
const phone = document.getElementById("phone-number")
const mail = document.getElementById("mail")

aboutMe.addEventListener("click", () => window.open(LINKEDIN_LINK))
linkedin.addEventListener("click", () => window.open(LINKEDIN_LINK))
github.addEventListener("click", () => window.open(GITHUB_LINK))
phone.addEventListener("click", () => window.open(TEL))
mail.addEventListener("click", () => window.open(MAILTO))

// Projects
const OPENCV_DETECTOR = "https://github.com/victor-mira/opencv-items-detector"
const OPENCV_SEGMENTATION = "https://github.com/victor-mira/opencv-rocks-segmentation"
const OPTISKI = "https://github.com/victor-mira/Optiski"
const ANIME_VAE = "https://github.com/victor-mira/anime-face-vae"
const GAN = ""
const MUSIC_GENERATOR = ""
const TRAFIC_CNN = "https://github.com/victor-mira/traffic-signs-cnn"
const CHESS_ENGINE = "https://github.com/victor-mira/Bell-Chess-Engine"
const PORTFOLIO = "https://github.com/victor-mira/portfolio-raw"

const project_OpenCVDetector = document.getElementById("openCVDetector")

project_OpenCVDetector.addEventListener("click", () => window.open(OPENCV_DETECTOR))
