import './servicePage.scss';
import Header from '../header/header';
import { useState, useEffect } from 'react';
import FadeIn from '../fadeIn/fadeIn';
import ServiceItem from '../serviceItem/serviceItem';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Icon from '../icon/icon';
import LetsTalk from '../letsTalk/letsTalk';
import { setDarkTheme } from '../../util/util.module';

const ServicePage = (): JSX.Element => {

    setDarkTheme();

    const [serv, setServ] = useState<number>(0);

    return (
        <>
            <Header classNameAdded="header--dark header--services" />
            <div className="servicePage">
                <div className="servicePage__tile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 342 90" preserveAspectRatio="xMidYMid meet">
                        <pattern id="webPattern" x="55" y="-10" width="232" height="90" patternUnits="userSpaceOnUse" viewBox="-10 -10 232 90">
                            <path d="M 72.4 70 L 60.9 70 L 46.3 9.8 L 45.8 7.3 L 45.4 7.3 L 44.9 9.8 L 30.6 70 L 18.8 70 L 0 0 L 8.9 0 L 23.9 61.6 L 24.4 64.1 L 24.9 64.1 L 25.3 61.6 L 40.1 0 L 51.2 0 L 66.4 61.6 L 67 64.1 L 67.4 64.1 L 67.8 61.6 L 82.3 0 L 91.2 0 L 72.4 70 Z M 110.1 63 L 146.5 63 L 146.5 70 L 101.7 70 L 101.7 0 L 146.5 0 L 146.5 7 L 110.1 7 L 110.1 31 L 140.9 31 L 140.9 38 L 110.1 38 L 110.1 63 Z M 202.8 33.4 L 202.8 33.9 A 2.787 2.787 0 0 1 203.714 34.068 Q 204.489 34.337 205.397 35.039 A 10.655 10.655 0 0 1 205.6 35.2 L 210.4 39.1 A 7.346 7.346 0 0 1 210.855 39.538 Q 211.305 40.014 211.499 40.431 A 1.89 1.89 0 0 1 211.55 40.55 Q 211.791 41.178 211.8 42.878 A 25.07 25.07 0 0 1 211.8 43 L 211.8 61 Q 211.8 64 209.4 66 Q 208.6 66.6 207 68 A 10.298 10.298 0 0 1 205.313 69.159 Q 203.756 70 202.2 70 L 164 70 L 164 0 L 201 0 A 6.306 6.306 0 0 1 203.681 0.624 Q 204.741 1.117 205.8 2 L 208.2 4 A 6.863 6.863 0 0 1 209.841 5.941 A 6.206 6.206 0 0 1 210.6 9 L 210.6 26.1 A 4.456 4.456 0 0 1 210.254 27.879 A 4.238 4.238 0 0 1 209 29.5 L 205.6 32.1 A 8.895 8.895 0 0 1 204.743 32.721 Q 203.797 33.318 203.012 33.39 A 2.322 2.322 0 0 1 202.8 33.4 Z M 201.7 41.1 L 199.5 39.3 Q 198.425 38.404 197.912 38.19 A 1.159 1.159 0 0 0 197.8 38.15 Q 197.3 38 195.8 38 L 172.4 38 L 172.4 63 L 198.5 63 A 34.966 34.966 0 0 0 199.129 62.995 Q 200.394 62.972 200.8 62.85 A 1.991 1.991 0 0 0 201.103 62.727 Q 201.546 62.509 202.2 62 Q 203.092 61.306 203.247 60.858 A 0.722 0.722 0 0 0 203.25 60.85 A 1.725 1.725 0 0 0 203.308 60.603 Q 203.385 60.161 203.397 59.277 A 26.03 26.03 0 0 0 203.4 58.9 L 203.4 44.7 A 20.223 20.223 0 0 0 203.39 44.053 Q 203.361 43.132 203.24 42.716 A 1.273 1.273 0 0 0 203.2 42.6 Q 203 42.1 201.7 41.1 Z M 197.3 7 L 172.4 7 L 172.4 31 L 194.1 31 A 34.032 34.032 0 0 0 194.828 30.993 Q 195.806 30.972 196.271 30.889 A 2.052 2.052 0 0 0 196.45 30.85 A 1.924 1.924 0 0 0 196.774 30.724 Q 197.104 30.565 197.544 30.248 A 11.597 11.597 0 0 0 198 29.9 L 200.6 27.8 A 15.009 15.009 0 0 0 201.077 27.386 Q 201.844 26.691 202 26.3 A 1.649 1.649 0 0 0 202.078 26.024 Q 202.179 25.528 202.197 24.527 A 25.046 25.046 0 0 0 202.2 24.1 L 202.2 11.1 A 23.588 23.588 0 0 0 202.193 10.494 Q 202.172 9.669 202.087 9.287 A 1.378 1.378 0 0 0 202.05 9.15 Q 201.901 8.702 201.007 8.005 A 9.749 9.749 0 0 0 201 8 Q 200.308 7.461 199.852 7.248 A 1.872 1.872 0 0 0 199.6 7.15 Q 199.192 7.028 197.917 7.005 A 35.123 35.123 0 0 0 197.3 7 Z" />
                        </pattern>
                        <g fill="url(#webPattern)">
                            <rect className="servicePage__tile__text" x="55" y="-10" width="232" height="46" />
                            <rect x="55" y="35" width="232" height="45" />
                        </g>
                    </svg>
                </div>
                <div className="servicePage__service">
                    <FadeIn argPropActive={1} setPropActive={setServ}>
                        <ServiceItem classNameAdded="" title={<>Do you need help with building your website?</>} text={<>We can build your website using technologies such as PHP or React.</>} />
                    </FadeIn>
                </div>
                <div className="servicePage__tile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 342 90" preserveAspectRatio="xMidYMid meet">
                        <pattern id="appPattern" x="55" y="-10" width="206" height="90" patternUnits="userSpaceOnUse" viewBox="-10 -10 206 90">
                            <path d="M 8.4 70 L 0 70 L 24 0 L 35.8 0 L 60.3 70 L 51.9 70 L 46.7 55.5 L 13.4 55.5 L 8.4 70 Z M 112.3 42 L 83.7 42 L 83.7 70 L 75.3 70 L 75.3 0 L 112.3 0 A 6.306 6.306 0 0 1 114.981 0.624 Q 116.041 1.117 117.1 2 L 119.5 4 A 6.863 6.863 0 0 1 121.141 5.941 A 6.206 6.206 0 0 1 121.9 9 L 121.9 33 Q 121.9 36 119.5 38 L 117.1 40 A 10.298 10.298 0 0 1 115.413 41.159 Q 113.856 42 112.3 42 Z M 176.4 42 L 147.8 42 L 147.8 70 L 139.4 70 L 139.4 0 L 176.4 0 A 6.306 6.306 0 0 1 179.081 0.624 Q 180.141 1.117 181.2 2 L 183.6 4 A 6.863 6.863 0 0 1 185.241 5.941 A 6.206 6.206 0 0 1 186 9 L 186 33 Q 186 36 183.6 38 L 181.2 40 A 10.298 10.298 0 0 1 179.513 41.159 Q 177.956 42 176.4 42 Z M 30.1 6 L 29.7 6 A 5.238 5.238 0 0 1 29.602 6.97 Q 29.438 7.838 29 8.9 L 15.5 49 L 44.6 49 L 30.8 8.9 A 12.061 12.061 0 0 1 30.409 7.814 Q 30.245 7.276 30.168 6.799 A 5.028 5.028 0 0 1 30.1 6 Z M 108.6 7 L 83.7 7 L 83.7 35 L 108.6 35 A 34.966 34.966 0 0 0 109.229 34.995 Q 110.494 34.972 110.9 34.85 A 1.991 1.991 0 0 0 111.203 34.727 Q 111.646 34.509 112.3 34 Q 113.192 33.306 113.347 32.858 A 0.722 0.722 0 0 0 113.35 32.85 A 1.725 1.725 0 0 0 113.408 32.603 Q 113.485 32.161 113.497 31.277 A 26.03 26.03 0 0 0 113.5 30.9 L 113.5 11.1 A 23.588 23.588 0 0 0 113.493 10.494 Q 113.472 9.669 113.387 9.287 A 1.378 1.378 0 0 0 113.35 9.15 Q 113.201 8.702 112.307 8.005 A 9.749 9.749 0 0 0 112.3 8 Q 111.608 7.461 111.152 7.248 A 1.872 1.872 0 0 0 110.9 7.15 Q 110.492 7.028 109.217 7.005 A 35.123 35.123 0 0 0 108.6 7 Z M 172.7 7 L 147.8 7 L 147.8 35 L 172.7 35 A 34.966 34.966 0 0 0 173.329 34.995 Q 174.594 34.972 175 34.85 A 1.991 1.991 0 0 0 175.303 34.727 Q 175.746 34.509 176.4 34 Q 177.292 33.306 177.447 32.858 A 0.722 0.722 0 0 0 177.45 32.85 A 1.725 1.725 0 0 0 177.508 32.603 Q 177.585 32.161 177.597 31.277 A 26.03 26.03 0 0 0 177.6 30.9 L 177.6 11.1 A 23.588 23.588 0 0 0 177.593 10.494 Q 177.572 9.669 177.487 9.287 A 1.378 1.378 0 0 0 177.45 9.15 Q 177.301 8.702 176.407 8.005 A 9.749 9.749 0 0 0 176.4 8 Q 175.708 7.461 175.252 7.248 A 1.872 1.872 0 0 0 175 7.15 Q 174.592 7.028 173.317 7.005 A 35.123 35.123 0 0 0 172.7 7 Z" />
                        </pattern>
                        <g fill="url(#appPattern)">
                            <rect className="servicePage__tile__text" x="55" y="-10" width="206" height="31" />
                            <rect x="55" y="20" width="206" height="60" />
                        </g>
                    </svg>
                </div>
                <div className="servicePage__service">
                    <FadeIn argPropActive={2} setPropActive={setServ}>
                        <ServiceItem classNameAdded="" title={<>App development</>} text={<>Is a hybrid solution better then a native solution for your organisation?<br />We can help you with building an App suited for your goals.</>} />
                    </FadeIn>
                </div>
                <div className="servicePage__tile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 342 90" preserveAspectRatio="xMidYMid meet">
                        <pattern id="cloudPattern" x="-10" y="-10" width="342" height="90" patternUnits="userSpaceOnUse" viewBox="-10 -10 342 90">
                            <path d="M 239.501 58.9 L 239.501 0 L 247.901 0 L 247.901 61 Q 247.901 64 245.501 66 L 243.101 68 A 10.298 10.298 0 0 1 241.413 69.159 Q 239.857 70 238.301 70 L 204.301 70 A 6.306 6.306 0 0 1 201.62 69.376 Q 200.56 68.883 199.501 68 L 197.101 66 A 6.863 6.863 0 0 1 195.46 64.059 A 6.206 6.206 0 0 1 194.701 61 L 194.701 0 L 203.101 0 L 203.101 58.9 A 23.588 23.588 0 0 0 203.108 59.506 Q 203.129 60.331 203.214 60.713 A 1.378 1.378 0 0 0 203.251 60.85 Q 203.4 61.298 204.294 61.995 A 9.749 9.749 0 0 0 204.301 62 Q 204.993 62.539 205.449 62.752 A 1.872 1.872 0 0 0 205.701 62.85 Q 206.109 62.972 207.383 62.995 A 35.123 35.123 0 0 0 208.001 63 L 234.601 63 A 34.966 34.966 0 0 0 235.23 62.995 Q 236.495 62.972 236.901 62.85 A 1.991 1.991 0 0 0 237.204 62.727 Q 237.647 62.509 238.301 62 Q 239.193 61.306 239.348 60.858 A 0.722 0.722 0 0 0 239.351 60.85 A 1.725 1.725 0 0 0 239.409 60.603 Q 239.485 60.161 239.498 59.277 A 26.03 26.03 0 0 0 239.501 58.9 Z M 51.401 9 L 51.401 13 L 43.001 13 L 43.001 11.1 A 23.588 23.588 0 0 0 42.994 10.494 Q 42.972 9.669 42.888 9.287 A 1.378 1.378 0 0 0 42.851 9.15 Q 42.701 8.702 41.808 8.005 A 9.749 9.749 0 0 0 41.801 8 Q 41.108 7.461 40.653 7.248 A 1.872 1.872 0 0 0 40.401 7.15 Q 39.993 7.028 38.718 7.005 A 35.123 35.123 0 0 0 38.101 7 L 13.301 7 A 34.966 34.966 0 0 0 12.671 7.005 Q 11.407 7.028 11.001 7.15 A 1.991 1.991 0 0 0 10.697 7.273 Q 10.255 7.491 9.601 8 Q 8.709 8.694 8.553 9.142 A 0.722 0.722 0 0 0 8.551 9.15 A 1.725 1.725 0 0 0 8.492 9.397 Q 8.416 9.839 8.403 10.723 A 26.03 26.03 0 0 0 8.401 11.1 L 8.401 58.9 A 23.588 23.588 0 0 0 8.408 59.506 Q 8.429 60.331 8.514 60.713 A 1.378 1.378 0 0 0 8.551 60.85 Q 8.7 61.298 9.594 61.995 A 9.749 9.749 0 0 0 9.601 62 Q 10.293 62.539 10.749 62.752 A 1.872 1.872 0 0 0 11.001 62.85 Q 11.409 62.972 12.683 62.995 A 35.123 35.123 0 0 0 13.301 63 L 38.101 63 A 34.966 34.966 0 0 0 38.73 62.995 Q 39.995 62.972 40.401 62.85 A 1.991 1.991 0 0 0 40.704 62.727 Q 41.147 62.509 41.801 62 Q 42.693 61.306 42.848 60.858 A 0.722 0.722 0 0 0 42.851 60.85 A 1.725 1.725 0 0 0 42.909 60.603 Q 42.985 60.161 42.998 59.277 A 26.03 26.03 0 0 0 43.001 58.9 L 43.001 57 L 51.401 57 L 51.401 61 Q 51.401 64 49.001 66 L 46.601 68 A 10.298 10.298 0 0 1 44.913 69.159 Q 43.357 70 41.801 70 L 9.601 70 A 6.306 6.306 0 0 1 6.92 69.376 Q 5.86 68.883 4.801 68 L 2.401 66 A 6.863 6.863 0 0 1 0.76 64.059 A 6.206 6.206 0 0 1 0.001 61 L 0.001 9 Q 0.001 6 2.401 4 L 4.801 2 A 10.298 10.298 0 0 1 6.488 0.841 Q 8.045 0 9.601 0 L 41.801 0 A 6.306 6.306 0 0 1 44.482 0.624 Q 45.541 1.117 46.601 2 L 49.001 4 A 6.863 6.863 0 0 1 50.641 5.941 A 6.206 6.206 0 0 1 51.401 9 Z M 128.501 0 L 165.101 0 A 6.306 6.306 0 0 1 167.782 0.624 Q 168.841 1.117 169.901 2 L 172.301 4 A 6.863 6.863 0 0 1 173.941 5.941 A 6.206 6.206 0 0 1 174.701 9 L 174.701 61 Q 174.701 64 172.301 66 L 169.901 68 A 10.298 10.298 0 0 1 168.213 69.159 Q 166.657 70 165.101 70 L 128.501 70 A 6.306 6.306 0 0 1 125.82 69.376 Q 124.76 68.883 123.701 68 L 121.301 66 A 6.863 6.863 0 0 1 119.66 64.059 A 6.206 6.206 0 0 1 118.901 61 L 118.901 9 Q 118.901 6 121.301 4 L 123.701 2 A 10.298 10.298 0 0 1 125.388 0.841 Q 126.945 0 128.501 0 Z M 304.901 70 L 267.901 70 L 267.901 0 L 304.901 0 A 6.648 6.648 0 0 1 308.719 1.221 A 9.051 9.051 0 0 1 309.701 2 L 319.301 10 A 10.019 10.019 0 0 1 320.406 11.063 Q 320.942 11.671 321.256 12.279 A 3.722 3.722 0 0 1 321.701 14 L 321.701 56 A 3.761 3.761 0 0 1 321.212 57.805 Q 320.887 58.405 320.346 59.005 A 10.173 10.173 0 0 1 319.301 60 L 309.701 68 Q 307.501 70 304.901 70 Z M 74.701 63 L 109.501 63 L 109.501 70 L 66.301 70 L 66.301 0 L 74.701 0 L 74.701 63 Z M 166.301 58.9 L 166.301 11.1 A 23.588 23.588 0 0 0 166.294 10.494 Q 166.272 9.669 166.188 9.287 A 1.378 1.378 0 0 0 166.151 9.15 Q 166.001 8.702 165.108 8.005 A 9.749 9.749 0 0 0 165.101 8 Q 164.408 7.461 163.953 7.248 A 1.872 1.872 0 0 0 163.701 7.15 Q 163.293 7.028 162.018 7.005 A 35.123 35.123 0 0 0 161.401 7 L 132.201 7 A 34.966 34.966 0 0 0 131.571 7.005 Q 130.307 7.028 129.901 7.15 A 1.991 1.991 0 0 0 129.597 7.273 Q 129.155 7.491 128.501 8 Q 127.609 8.694 127.453 9.142 A 0.722 0.722 0 0 0 127.451 9.15 A 1.725 1.725 0 0 0 127.392 9.397 Q 127.316 9.839 127.303 10.723 A 26.03 26.03 0 0 0 127.301 11.1 L 127.301 58.9 A 23.588 23.588 0 0 0 127.308 59.506 Q 127.329 60.331 127.414 60.713 A 1.378 1.378 0 0 0 127.451 60.85 Q 127.6 61.298 128.494 61.995 A 9.749 9.749 0 0 0 128.501 62 Q 129.193 62.539 129.649 62.752 A 1.872 1.872 0 0 0 129.901 62.85 Q 130.309 62.972 131.583 62.995 A 35.123 35.123 0 0 0 132.201 63 L 161.401 63 A 34.966 34.966 0 0 0 162.03 62.995 Q 163.295 62.972 163.701 62.85 A 1.991 1.991 0 0 0 164.004 62.727 Q 164.447 62.509 165.101 62 Q 165.993 61.306 166.148 60.858 A 0.722 0.722 0 0 0 166.151 60.85 A 1.725 1.725 0 0 0 166.209 60.603 Q 166.285 60.161 166.298 59.277 A 26.03 26.03 0 0 0 166.301 58.9 Z M 313.301 53 L 313.301 17 A 3.761 3.761 0 0 0 312.812 15.195 Q 312.487 14.595 311.946 13.995 A 10.173 10.173 0 0 0 310.901 13 L 306.101 9 Q 303.901 7 301.301 7 L 276.301 7 L 276.301 63 L 301.301 63 A 6.648 6.648 0 0 0 305.119 61.779 A 9.051 9.051 0 0 0 306.101 61 L 310.901 57 A 10.019 10.019 0 0 0 312.006 55.937 Q 312.542 55.329 312.856 54.721 A 3.722 3.722 0 0 0 313.301 53 Z" />
                        </pattern>
                        <g fill="url(#cloudPattern)">
                            <rect className="servicePage__tile__text" x="-10" y="-10" width="342" height="46" />
                            <rect x="-10" y="35" width="342" height="45" />
                        </g>
                    </svg>
                </div>
                <div className="servicePage__service">
                    <FadeIn argPropActive={3} setPropActive={setServ}>
                        <ServiceItem classNameAdded="" title={<>Fascinated about the Cloud?</>} text={<>We are fascinated about the Cloud and it's possibilities. Helping organisations to make use of this potential is what we want to do.</>} />
                    </FadeIn>
                </div>
                <div className="servicePage__tile">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 342 90" preserveAspectRatio="xMidYMid meet">
                        <pattern id="aiPattern" x="109" y="-10" width="104" height="90" patternUnits="userSpaceOnUse" viewBox="-10 -10 104 90">
                            <path d="M 8.4 70 L 0 70 L 24 0 L 35.8 0 L 60.3 70 L 51.9 70 L 46.7 55.5 L 13.4 55.5 L 8.4 70 Z M 75.3 70 L 75.3 0 L 83.7 0 L 83.7 70 L 75.3 70 Z M 30.1 6 L 29.7 6 A 5.238 5.238 0 0 1 29.602 6.97 Q 29.438 7.837 29 8.9 L 15.5 49 L 44.6 49 L 30.8 8.9 A 12.061 12.061 0 0 1 30.409 7.814 Q 30.245 7.276 30.168 6.799 A 5.028 5.028 0 0 1 30.1 6 Z" />
                        </pattern>
                        <g fill="url(#aiPattern)">
                            <rect className="servicePage__tile__text" x="109" y="-10" width="104" height="46" />
                            <rect x="109" y="35" width="104" height="45" />
                        </g>
                    </svg>
                </div>
                <div className="servicePage__service">
                    <FadeIn argPropActive={4} setPropActive={setServ}>
                        <ServiceItem classNameAdded="" title={<>Artificial intelligence</>} text={<>We help organisations use the full potential of all it's data by using AI. Is your organisation ready for it?</>} />
                    </FadeIn>
                </div>
            </div>
            <Footer classNameAdded="" dark={true} />
        </>
    );
}

export default ServicePage;
