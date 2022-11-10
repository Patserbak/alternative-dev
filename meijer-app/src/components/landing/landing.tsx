import './landing.scss';
import { useRef } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import PhoneLeft from '../phoneLeft/phoneLeft';
import useIntersectionObserver from '../intersectionObserver/intersectionObserver';

const Landing = (): JSX.Element => {

    var optionsObserverMiddle = {
        threshold: 0.5,
        root: null,
        rootMargin: '0%',
        freezeOnceVisible: true
    }

    var optionsObserverEnd = {
        threshold: 0.1,
        root: null,
        rootMargin: '0%',
        freezeOnceVisible: true
    }

    const middleRef = useRef<HTMLDivElement | null>(null);
    const middleEntry = useIntersectionObserver(middleRef, optionsObserverMiddle);

    const endRef = useRef<HTMLDivElement | null>(null);
    const endEntry = useIntersectionObserver(endRef, optionsObserverEnd);

    const messageScreen: JSX.Element = <div className={`landing__ending__messageWrapper ${endEntry?.isIntersecting ? "landing__ending__messageWrapper--active" : ""}`}>
        <div>How can<br /> we help?</div>
    </div>;

    return (
        <>
            <Header classNameAdded="" />
            <div className="landing">
                <div className="landing__begin">
                    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="-3 -3 460 280"
                        preserveAspectRatio="xMinYMid meet">
                        <defs>
                            <pattern id="titlePattern" x="-3" y="-5" width="460" height="280" patternUnits="userSpaceOnUse" viewBox="-3 -3 460 280">
                                <path d="M 34.501 238 L 10.601 238 A 6.306 6.306 0 0 1 7.919 237.376 Q 6.86 236.883 5.801 236 L 3.101 233.7 A 6.53 6.53 0 0 1 1.905 232.46 A 4.606 4.606 0 0 1 1.001 229.7 L 1.001 209 Q 1.001 206 3.401 204 L 5.801 202 A 10.298 10.298 0 0 1 7.488 200.841 Q 9.044 200 10.601 200 L 37.201 200 A 6.306 6.306 0 0 1 39.882 200.624 Q 40.941 201.117 42.001 202 L 44.401 204 A 6.863 6.863 0 0 1 46.041 205.941 A 6.206 6.206 0 0 1 46.801 209 L 46.801 213 L 38.401 213 L 38.401 211.1 A 23.588 23.588 0 0 0 38.393 210.494 Q 38.372 209.669 38.287 209.287 A 1.378 1.378 0 0 0 38.251 209.15 Q 38.101 208.702 37.207 208.005 A 9.749 9.749 0 0 0 37.201 208 Q 36.508 207.461 36.053 207.248 A 1.872 1.872 0 0 0 35.801 207.15 Q 35.392 207.028 34.118 207.005 A 35.123 35.123 0 0 0 33.501 207 L 14.301 207 A 34.966 34.966 0 0 0 13.671 207.005 Q 12.407 207.028 12.001 207.15 A 1.991 1.991 0 0 0 11.697 207.273 Q 11.254 207.491 10.601 208 Q 9.708 208.694 9.553 209.142 A 0.722 0.722 0 0 0 9.551 209.15 A 1.725 1.725 0 0 0 9.492 209.397 Q 9.416 209.839 9.403 210.723 A 26.03 26.03 0 0 0 9.401 211.1 L 9.401 226.9 A 23.588 23.588 0 0 0 9.408 227.506 Q 9.429 228.331 9.514 228.713 A 1.378 1.378 0 0 0 9.551 228.85 Q 9.7 229.298 10.594 229.995 A 9.749 9.749 0 0 0 10.601 230 Q 11.293 230.539 11.749 230.752 A 1.872 1.872 0 0 0 12.001 230.85 Q 12.409 230.972 13.683 230.995 A 35.123 35.123 0 0 0 14.301 231 L 38.201 231 A 6.306 6.306 0 0 1 40.882 231.624 Q 41.941 232.117 43.001 233 L 45.401 235 A 6.863 6.863 0 0 1 47.041 236.941 A 6.206 6.206 0 0 1 47.801 240 L 47.801 261 Q 47.801 264 45.401 266 L 43.001 268 A 10.298 10.298 0 0 1 41.313 269.159 Q 39.757 270 38.201 270 L 9.601 270 A 6.306 6.306 0 0 1 6.919 269.376 Q 5.86 268.883 4.801 268 L 2.401 266 A 6.863 6.863 0 0 1 0.76 264.059 A 6.206 6.206 0 0 1 0.001 261 L 0.001 257 L 8.401 257 L 8.401 258.9 A 23.588 23.588 0 0 0 8.408 259.506 Q 8.429 260.331 8.514 260.713 A 1.378 1.378 0 0 0 8.551 260.85 Q 8.7 261.298 9.594 261.995 A 9.749 9.749 0 0 0 9.601 262 Q 10.293 262.539 10.749 262.752 A 1.872 1.872 0 0 0 11.001 262.85 Q 11.409 262.972 12.683 262.995 A 35.123 35.123 0 0 0 13.301 263 L 34.501 263 A 34.966 34.966 0 0 0 35.13 262.995 Q 36.394 262.972 36.801 262.85 A 1.991 1.991 0 0 0 37.104 262.727 Q 37.547 262.509 38.201 262 Q 39.093 261.306 39.248 260.858 A 0.722 0.722 0 0 0 39.251 260.85 A 1.725 1.725 0 0 0 39.309 260.603 Q 39.385 260.161 39.398 259.277 A 26.03 26.03 0 0 0 39.401 258.9 L 39.401 242.1 A 23.588 23.588 0 0 0 39.393 241.494 Q 39.372 240.669 39.287 240.287 A 1.378 1.378 0 0 0 39.251 240.15 Q 39.101 239.702 38.207 239.005 A 9.749 9.749 0 0 0 38.201 239 Q 37.508 238.461 37.053 238.248 A 1.872 1.872 0 0 0 36.801 238.15 Q 36.392 238.028 35.118 238.005 A 35.123 35.123 0 0 0 34.501 238 Z M 110.101 258.9 L 110.101 200 L 118.501 200 L 118.501 261 Q 118.501 264 116.101 266 L 113.701 268 A 10.298 10.298 0 0 1 112.013 269.159 Q 110.457 270 108.901 270 L 74.901 270 A 6.306 6.306 0 0 1 72.219 269.376 Q 71.16 268.883 70.101 268 L 67.701 266 A 6.863 6.863 0 0 1 66.06 264.059 A 6.206 6.206 0 0 1 65.301 261 L 65.301 200 L 73.701 200 L 73.701 258.9 A 23.588 23.588 0 0 0 73.708 259.506 Q 73.729 260.331 73.814 260.713 A 1.378 1.378 0 0 0 73.851 260.85 Q 74 261.298 74.894 261.995 A 9.749 9.749 0 0 0 74.901 262 Q 75.593 262.539 76.049 262.752 A 1.872 1.872 0 0 0 76.301 262.85 Q 76.709 262.972 77.983 262.995 A 35.123 35.123 0 0 0 78.601 263 L 105.201 263 A 34.966 34.966 0 0 0 105.83 262.995 Q 107.094 262.972 107.501 262.85 A 1.991 1.991 0 0 0 107.804 262.727 Q 108.247 262.509 108.901 262 Q 109.793 261.306 109.948 260.858 A 0.722 0.722 0 0 0 109.951 260.85 A 1.725 1.725 0 0 0 110.009 260.603 Q 110.085 260.161 110.098 259.277 A 26.03 26.03 0 0 0 110.101 258.9 Z M 342.501 270 L 342.501 200 L 379.501 200 A 6.306 6.306 0 0 1 382.182 200.624 Q 383.241 201.117 384.301 202 L 386.701 204 A 6.863 6.863 0 0 1 388.341 205.941 A 6.206 6.206 0 0 1 389.101 209 L 389.101 232.4 A 6.441 6.441 0 0 1 387.012 237.232 A 8.553 8.553 0 0 1 386.601 237.6 L 384.101 239.7 A 8.743 8.743 0 0 1 382.28 240.865 A 6.485 6.485 0 0 1 379.501 241.5 L 373.901 241.5 L 384.201 257.5 Q 385.146 258.962 385.612 259.499 A 2.884 2.884 0 0 0 385.751 259.65 A 2.892 2.892 0 0 0 386.025 259.886 Q 386.501 260.253 387.48 260.818 A 35.331 35.331 0 0 0 387.801 261 L 388.901 261.6 A 18.078 18.078 0 0 1 389.523 261.961 Q 390.535 262.577 390.881 263.016 A 1.085 1.085 0 0 1 391.001 263.2 Q 391.248 263.696 391.292 265.352 A 28.875 28.875 0 0 1 391.301 266.1 L 391.301 270 L 388.801 270 Q 387.001 270 386.351 269.8 A 2.777 2.777 0 0 1 385.994 269.657 Q 385.391 269.373 384.335 268.66 A 34.351 34.351 0 0 1 384.101 268.5 L 382.201 267.2 Q 380.001 265.7 378.601 263.3 L 365.301 242 L 350.901 242 L 350.901 270 L 342.501 270 Z M 399.201 207 L 399.201 200 L 452.001 200 L 452.001 207 L 429.801 207 L 429.801 270 L 421.401 270 L 421.401 207 L 399.201 207 Z M 276.301 200 L 312.901 200 A 6.306 6.306 0 0 1 315.582 200.624 Q 316.641 201.117 317.701 202 L 320.101 204 A 6.863 6.863 0 0 1 321.741 205.941 A 6.206 6.206 0 0 1 322.501 209 L 322.501 261 Q 322.501 264 320.101 266 L 317.701 268 A 10.298 10.298 0 0 1 316.013 269.159 Q 314.457 270 312.901 270 L 276.301 270 A 6.306 6.306 0 0 1 273.619 269.376 Q 272.56 268.883 271.501 268 L 269.101 266 A 6.863 6.863 0 0 1 267.46 264.059 A 6.206 6.206 0 0 1 266.701 261 L 266.701 209 Q 266.701 206 269.101 204 L 271.501 202 A 10.298 10.298 0 0 1 273.188 200.841 Q 274.744 200 276.301 200 Z M 175.501 242 L 146.901 242 L 146.901 270 L 138.501 270 L 138.501 200 L 175.501 200 A 6.306 6.306 0 0 1 178.182 200.624 Q 179.241 201.117 180.301 202 L 182.701 204 A 6.863 6.863 0 0 1 184.341 205.941 A 6.206 6.206 0 0 1 185.101 209 L 185.101 233 Q 185.101 236 182.701 238 L 180.301 240 A 10.298 10.298 0 0 1 178.613 241.159 Q 177.057 242 175.501 242 Z M 239.601 242 L 211.001 242 L 211.001 270 L 202.601 270 L 202.601 200 L 239.601 200 A 6.306 6.306 0 0 1 242.282 200.624 Q 243.341 201.117 244.401 202 L 246.801 204 A 6.863 6.863 0 0 1 248.441 205.941 A 6.206 6.206 0 0 1 249.201 209 L 249.201 233 Q 249.201 236 246.801 238 L 244.401 240 A 10.298 10.298 0 0 1 242.713 241.159 Q 241.157 242 239.601 242 Z M 314.101 258.9 L 314.101 211.1 A 23.588 23.588 0 0 0 314.093 210.494 Q 314.072 209.669 313.987 209.287 A 1.378 1.378 0 0 0 313.951 209.15 Q 313.801 208.702 312.907 208.005 A 9.749 9.749 0 0 0 312.901 208 Q 312.208 207.461 311.753 207.248 A 1.872 1.872 0 0 0 311.501 207.15 Q 311.092 207.028 309.818 207.005 A 35.123 35.123 0 0 0 309.201 207 L 280.001 207 A 34.966 34.966 0 0 0 279.371 207.005 Q 278.107 207.028 277.701 207.15 A 1.991 1.991 0 0 0 277.397 207.273 Q 276.954 207.491 276.301 208 Q 275.408 208.694 275.253 209.142 A 0.722 0.722 0 0 0 275.251 209.15 A 1.725 1.725 0 0 0 275.192 209.397 Q 275.116 209.839 275.103 210.723 A 26.03 26.03 0 0 0 275.101 211.1 L 275.101 258.9 A 23.588 23.588 0 0 0 275.108 259.506 Q 275.129 260.331 275.214 260.713 A 1.378 1.378 0 0 0 275.251 260.85 Q 275.4 261.298 276.294 261.995 A 9.749 9.749 0 0 0 276.301 262 Q 276.993 262.539 277.449 262.752 A 1.872 1.872 0 0 0 277.701 262.85 Q 278.109 262.972 279.383 262.995 A 35.123 35.123 0 0 0 280.001 263 L 309.201 263 A 34.966 34.966 0 0 0 309.83 262.995 Q 311.094 262.972 311.501 262.85 A 1.991 1.991 0 0 0 311.804 262.727 Q 312.247 262.509 312.901 262 Q 313.793 261.306 313.948 260.858 A 0.722 0.722 0 0 0 313.951 260.85 A 1.725 1.725 0 0 0 314.009 260.603 Q 314.085 260.161 314.098 259.277 A 26.03 26.03 0 0 0 314.101 258.9 Z M 171.801 207 L 146.901 207 L 146.901 235 L 171.801 235 A 34.966 34.966 0 0 0 172.43 234.995 Q 173.694 234.972 174.101 234.85 A 1.991 1.991 0 0 0 174.404 234.727 Q 174.847 234.509 175.501 234 Q 176.393 233.306 176.548 232.858 A 0.722 0.722 0 0 0 176.551 232.85 A 1.725 1.725 0 0 0 176.609 232.603 Q 176.685 232.161 176.698 231.277 A 26.03 26.03 0 0 0 176.701 230.9 L 176.701 211.1 A 23.588 23.588 0 0 0 176.693 210.494 Q 176.672 209.669 176.587 209.287 A 1.378 1.378 0 0 0 176.551 209.15 Q 176.401 208.702 175.507 208.005 A 9.749 9.749 0 0 0 175.501 208 Q 174.808 207.461 174.353 207.248 A 1.872 1.872 0 0 0 174.101 207.15 Q 173.692 207.028 172.418 207.005 A 35.123 35.123 0 0 0 171.801 207 Z M 235.901 207 L 211.001 207 L 211.001 235 L 235.901 235 A 34.966 34.966 0 0 0 236.53 234.995 Q 237.794 234.972 238.201 234.85 A 1.991 1.991 0 0 0 238.504 234.727 Q 238.947 234.509 239.601 234 Q 240.493 233.306 240.648 232.858 A 0.722 0.722 0 0 0 240.651 232.85 A 1.725 1.725 0 0 0 240.709 232.603 Q 240.785 232.161 240.798 231.277 A 26.03 26.03 0 0 0 240.801 230.9 L 240.801 211.1 A 23.588 23.588 0 0 0 240.793 210.494 Q 240.772 209.669 240.687 209.287 A 1.378 1.378 0 0 0 240.651 209.15 Q 240.501 208.702 239.607 208.005 A 9.749 9.749 0 0 0 239.601 208 Q 238.908 207.461 238.453 207.248 A 1.872 1.872 0 0 0 238.201 207.15 Q 237.792 207.028 236.518 207.005 A 35.123 35.123 0 0 0 235.901 207 Z M 375.801 207 L 350.901 207 L 350.901 235 L 375.801 235 A 34.966 34.966 0 0 0 376.43 234.995 Q 377.694 234.972 378.101 234.85 A 1.991 1.991 0 0 0 378.404 234.727 Q 378.847 234.509 379.501 234 Q 380.393 233.306 380.548 232.858 A 0.722 0.722 0 0 0 380.551 232.85 A 1.725 1.725 0 0 0 380.609 232.603 Q 380.685 232.161 380.698 231.277 A 26.03 26.03 0 0 0 380.701 230.9 L 380.701 211.1 A 23.588 23.588 0 0 0 380.693 210.494 Q 380.672 209.669 380.587 209.287 A 1.378 1.378 0 0 0 380.551 209.15 Q 380.401 208.702 379.507 208.005 A 9.749 9.749 0 0 0 379.501 208 Q 378.808 207.461 378.353 207.248 A 1.872 1.872 0 0 0 378.101 207.15 Q 377.692 207.028 376.418 207.005 A 35.123 35.123 0 0 0 375.801 207 Z M 301.9 100 L 338.5 157 L 338.8 156.9 Q 338.1 154.5 338.1 152.1 L 338.1 100 L 346.5 100 L 346.5 170 L 338.1 170 L 301.5 113.8 L 301.2 113.9 Q 301.9 116.3 301.9 118.7 L 301.9 170 L 293.5 170 L 293.5 100 L 301.9 100 Z M 276 109 L 276 113 L 267.6 113 L 267.6 111.1 A 23.588 23.588 0 0 0 267.593 110.494 Q 267.572 109.669 267.487 109.287 A 1.378 1.378 0 0 0 267.45 109.15 Q 267.301 108.702 266.407 108.005 A 9.749 9.749 0 0 0 266.4 108 Q 265.708 107.461 265.252 107.248 A 1.872 1.872 0 0 0 265 107.15 Q 264.592 107.028 263.317 107.005 A 35.123 35.123 0 0 0 262.7 107 L 238.1 107 A 34.966 34.966 0 0 0 237.471 107.005 Q 236.206 107.028 235.8 107.15 A 1.991 1.991 0 0 0 235.497 107.273 Q 235.054 107.491 234.4 108 Q 233.508 108.694 233.353 109.142 A 0.722 0.722 0 0 0 233.35 109.15 A 1.725 1.725 0 0 0 233.292 109.397 Q 233.215 109.839 233.203 110.723 A 26.03 26.03 0 0 0 233.2 111.1 L 233.2 158.9 A 23.588 23.588 0 0 0 233.207 159.506 Q 233.228 160.331 233.313 160.713 A 1.378 1.378 0 0 0 233.35 160.85 Q 233.499 161.298 234.393 161.995 A 9.749 9.749 0 0 0 234.4 162 Q 235.092 162.539 235.548 162.752 A 1.872 1.872 0 0 0 235.8 162.85 Q 236.208 162.972 237.483 162.995 A 35.123 35.123 0 0 0 238.1 163 L 262.7 163 A 34.966 34.966 0 0 0 263.329 162.995 Q 264.594 162.972 265 162.85 A 1.991 1.991 0 0 0 265.303 162.727 Q 265.746 162.509 266.4 162 Q 267.292 161.306 267.447 160.858 A 0.722 0.722 0 0 0 267.45 160.85 A 1.725 1.725 0 0 0 267.508 160.603 Q 267.585 160.161 267.597 159.277 A 26.03 26.03 0 0 0 267.6 158.9 L 267.6 141 L 252.4 141 L 252.4 134 L 276 134 L 276 161 Q 276 164 273.6 166 L 271.2 168 A 10.298 10.298 0 0 1 269.513 169.159 Q 267.956 170 266.4 170 L 234.4 170 A 6.306 6.306 0 0 1 231.719 169.376 Q 230.659 168.883 229.6 168 L 227.2 166 A 6.863 6.863 0 0 1 225.559 164.059 A 6.206 6.206 0 0 1 224.8 161 L 224.8 109 Q 224.8 106 227.2 104 L 229.6 102 A 10.298 10.298 0 0 1 231.287 100.841 Q 232.844 100 234.4 100 L 266.4 100 A 6.306 6.306 0 0 1 269.081 100.624 Q 270.141 101.117 271.2 102 L 273.6 104 A 6.863 6.863 0 0 1 275.241 105.941 A 6.206 6.206 0 0 1 276 109 Z M 165.6 138 L 141.7 138 A 6.306 6.306 0 0 1 139.019 137.376 Q 137.959 136.883 136.9 136 L 134.2 133.7 A 6.53 6.53 0 0 1 133.004 132.46 A 4.606 4.606 0 0 1 132.1 129.7 L 132.1 109 Q 132.1 106 134.5 104 L 136.9 102 A 10.298 10.298 0 0 1 138.587 100.841 Q 140.144 100 141.7 100 L 168.3 100 A 6.306 6.306 0 0 1 170.981 100.624 Q 172.041 101.117 173.1 102 L 175.5 104 A 6.863 6.863 0 0 1 177.141 105.941 A 6.206 6.206 0 0 1 177.9 109 L 177.9 113 L 169.5 113 L 169.5 111.1 A 23.588 23.588 0 0 0 169.493 110.494 Q 169.472 109.669 169.387 109.287 A 1.378 1.378 0 0 0 169.35 109.15 Q 169.201 108.702 168.307 108.005 A 9.749 9.749 0 0 0 168.3 108 Q 167.608 107.461 167.152 107.248 A 1.872 1.872 0 0 0 166.9 107.15 Q 166.492 107.028 165.217 107.005 A 35.123 35.123 0 0 0 164.6 107 L 145.4 107 A 34.966 34.966 0 0 0 144.771 107.005 Q 143.506 107.028 143.1 107.15 A 1.991 1.991 0 0 0 142.797 107.273 Q 142.354 107.491 141.7 108 Q 140.808 108.694 140.653 109.142 A 0.722 0.722 0 0 0 140.65 109.15 A 1.725 1.725 0 0 0 140.592 109.397 Q 140.515 109.839 140.503 110.723 A 26.03 26.03 0 0 0 140.5 111.1 L 140.5 126.9 A 23.588 23.588 0 0 0 140.507 127.506 Q 140.528 128.331 140.613 128.713 A 1.378 1.378 0 0 0 140.65 128.85 Q 140.799 129.298 141.693 129.995 A 9.749 9.749 0 0 0 141.7 130 Q 142.392 130.539 142.848 130.752 A 1.872 1.872 0 0 0 143.1 130.85 Q 143.508 130.972 144.783 130.995 A 35.123 35.123 0 0 0 145.4 131 L 169.3 131 A 6.306 6.306 0 0 1 171.981 131.624 Q 173.041 132.117 174.1 133 L 176.5 135 A 6.863 6.863 0 0 1 178.141 136.941 A 6.206 6.206 0 0 1 178.9 140 L 178.9 161 Q 178.9 164 176.5 166 L 174.1 168 A 10.298 10.298 0 0 1 172.413 169.159 Q 170.856 170 169.3 170 L 140.7 170 A 6.306 6.306 0 0 1 138.019 169.376 Q 136.959 168.883 135.9 168 L 133.5 166 A 6.863 6.863 0 0 1 131.859 164.059 A 6.206 6.206 0 0 1 131.1 161 L 131.1 157 L 139.5 157 L 139.5 158.9 A 23.588 23.588 0 0 0 139.507 159.506 Q 139.528 160.331 139.613 160.713 A 1.378 1.378 0 0 0 139.65 160.85 Q 139.799 161.298 140.693 161.995 A 9.749 9.749 0 0 0 140.7 162 Q 141.392 162.539 141.848 162.752 A 1.872 1.872 0 0 0 142.1 162.85 Q 142.508 162.972 143.783 162.995 A 35.123 35.123 0 0 0 144.4 163 L 165.6 163 A 34.966 34.966 0 0 0 166.229 162.995 Q 167.494 162.972 167.9 162.85 A 1.991 1.991 0 0 0 168.203 162.727 Q 168.646 162.509 169.3 162 Q 170.192 161.306 170.347 160.858 A 0.722 0.722 0 0 0 170.35 160.85 A 1.725 1.725 0 0 0 170.408 160.603 Q 170.485 160.161 170.497 159.277 A 26.03 26.03 0 0 0 170.5 158.9 L 170.5 142.1 A 23.588 23.588 0 0 0 170.493 141.494 Q 170.472 140.669 170.387 140.287 A 1.378 1.378 0 0 0 170.35 140.15 Q 170.201 139.702 169.307 139.005 A 9.749 9.749 0 0 0 169.3 139 Q 168.608 138.461 168.152 138.248 A 1.872 1.872 0 0 0 167.9 138.15 Q 167.492 138.028 166.217 138.005 A 35.123 35.123 0 0 0 165.6 138 Z M 79.7 163 L 116.1 163 L 116.1 170 L 71.3 170 L 71.3 100 L 116.1 100 L 116.1 107 L 79.7 107 L 79.7 131 L 110.5 131 L 110.5 138 L 79.7 138 L 79.7 163 Z M 37 170 L 0 170 L 0 100 L 37 100 A 6.648 6.648 0 0 1 40.818 101.221 A 9.051 9.051 0 0 1 41.8 102 L 51.4 110 A 10.019 10.019 0 0 1 52.506 111.063 Q 53.042 111.671 53.356 112.279 A 3.722 3.722 0 0 1 53.8 114 L 53.8 156 A 3.761 3.761 0 0 1 53.311 157.805 Q 52.986 158.405 52.445 159.005 A 10.173 10.173 0 0 1 51.4 160 L 41.8 168 Q 39.6 170 37 170 Z M 45.4 153 L 45.4 117 A 3.761 3.761 0 0 0 44.911 115.195 Q 44.586 114.595 44.045 113.995 A 10.173 10.173 0 0 0 43 113 L 38.2 109 Q 36 107 33.4 107 L 8.4 107 L 8.4 163 L 33.4 163 A 6.648 6.648 0 0 0 37.218 161.779 A 9.051 9.051 0 0 0 38.2 161 L 43 157 A 10.019 10.019 0 0 0 44.106 155.937 Q 44.642 155.329 44.956 154.721 A 3.722 3.722 0 0 0 45.4 153 Z M 196.4 170 L 196.4 100 L 204.8 100 L 204.8 170 L 196.4 170 Z M 110.1 58.9 L 110.1 0 L 118.5 0 L 118.5 61 Q 118.5 64 116.1 66 L 113.7 68 A 10.298 10.298 0 0 1 112.013 69.159 Q 110.456 70 108.9 70 L 74.9 70 A 6.306 6.306 0 0 1 72.219 69.376 Q 71.159 68.883 70.1 68 L 67.7 66 A 6.863 6.863 0 0 1 66.059 64.059 A 6.206 6.206 0 0 1 65.3 61 L 65.3 0 L 73.7 0 L 73.7 58.9 A 23.588 23.588 0 0 0 73.707 59.506 Q 73.728 60.331 73.813 60.713 A 1.378 1.378 0 0 0 73.85 60.85 Q 73.999 61.298 74.893 61.995 A 9.749 9.749 0 0 0 74.9 62 Q 75.592 62.539 76.048 62.752 A 1.872 1.872 0 0 0 76.3 62.85 Q 76.708 62.972 77.983 62.995 A 35.123 35.123 0 0 0 78.6 63 L 105.2 63 A 34.966 34.966 0 0 0 105.829 62.995 Q 107.094 62.972 107.5 62.85 A 1.991 1.991 0 0 0 107.803 62.727 Q 108.246 62.509 108.9 62 Q 109.792 61.306 109.947 60.858 A 0.722 0.722 0 0 0 109.95 60.85 A 1.725 1.725 0 0 0 110.008 60.603 Q 110.085 60.161 110.097 59.277 A 26.03 26.03 0 0 0 110.1 58.9 Z M 38.8 33.4 L 38.8 33.9 A 2.787 2.787 0 0 1 39.714 34.068 Q 40.489 34.337 41.397 35.039 A 10.655 10.655 0 0 1 41.6 35.2 L 46.4 39.1 A 7.346 7.346 0 0 1 46.855 39.538 Q 47.305 40.014 47.499 40.431 A 1.89 1.89 0 0 1 47.55 40.55 Q 47.791 41.178 47.8 42.878 A 25.07 25.07 0 0 1 47.8 43 L 47.8 61 Q 47.8 64 45.4 66 Q 44.6 66.6 43 68 A 10.298 10.298 0 0 1 41.313 69.159 Q 39.756 70 38.2 70 L 0 70 L 0 0 L 37 0 A 6.306 6.306 0 0 1 39.681 0.624 Q 40.741 1.117 41.8 2 L 44.2 4 A 6.863 6.863 0 0 1 45.841 5.941 A 6.206 6.206 0 0 1 46.6 9 L 46.6 26.1 A 4.456 4.456 0 0 1 46.254 27.879 A 4.238 4.238 0 0 1 45 29.5 L 41.6 32.1 A 8.895 8.895 0 0 1 40.743 32.721 Q 39.797 33.318 39.012 33.39 A 2.322 2.322 0 0 1 38.8 33.4 Z M 256.5 70 L 219.5 70 L 219.5 0 L 256.5 0 A 6.648 6.648 0 0 1 260.318 1.221 A 9.051 9.051 0 0 1 261.3 2 L 270.9 10 A 10.019 10.019 0 0 1 272.006 11.063 Q 272.542 11.671 272.856 12.279 A 3.722 3.722 0 0 1 273.3 14 L 273.3 56 A 3.761 3.761 0 0 1 272.811 57.805 Q 272.486 58.405 271.945 59.005 A 10.173 10.173 0 0 1 270.9 60 L 261.3 68 Q 259.1 70 256.5 70 Z M 175.3 63 L 210.1 63 L 210.1 70 L 166.9 70 L 166.9 0 L 175.3 0 L 175.3 63 Z M 264.9 53 L 264.9 17 A 3.761 3.761 0 0 0 264.411 15.195 Q 264.086 14.595 263.545 13.995 A 10.173 10.173 0 0 0 262.5 13 L 257.7 9 Q 255.5 7 252.9 7 L 227.9 7 L 227.9 63 L 252.9 63 A 6.648 6.648 0 0 0 256.718 61.779 A 9.051 9.051 0 0 0 257.7 61 L 262.5 57 A 10.019 10.019 0 0 0 263.606 55.937 Q 264.142 55.329 264.456 54.721 A 3.722 3.722 0 0 0 264.9 53 Z M 138.5 70 L 138.5 0 L 146.9 0 L 146.9 70 L 138.5 70 Z M 37.7 41.1 L 35.5 39.3 Q 34.425 38.404 33.912 38.19 A 1.159 1.159 0 0 0 33.8 38.15 Q 33.3 38 31.8 38 L 8.4 38 L 8.4 63 L 34.5 63 A 34.966 34.966 0 0 0 35.129 62.995 Q 36.394 62.972 36.8 62.85 A 1.991 1.991 0 0 0 37.103 62.727 Q 37.546 62.509 38.2 62 Q 39.092 61.306 39.247 60.858 A 0.722 0.722 0 0 0 39.25 60.85 A 1.725 1.725 0 0 0 39.308 60.603 Q 39.385 60.161 39.397 59.277 A 26.03 26.03 0 0 0 39.4 58.9 L 39.4 44.7 A 20.223 20.223 0 0 0 39.39 44.053 Q 39.361 43.132 39.24 42.716 A 1.273 1.273 0 0 0 39.2 42.6 Q 39 42.1 37.7 41.1 Z M 33.3 7 L 8.4 7 L 8.4 31 L 30.1 31 A 34.032 34.032 0 0 0 30.828 30.993 Q 31.806 30.972 32.271 30.889 A 2.052 2.052 0 0 0 32.45 30.85 A 1.924 1.924 0 0 0 32.774 30.724 Q 33.104 30.565 33.544 30.248 A 11.597 11.597 0 0 0 34 29.9 L 36.6 27.8 A 15.009 15.009 0 0 0 37.077 27.386 Q 37.844 26.691 38 26.3 A 1.649 1.649 0 0 0 38.078 26.024 Q 38.179 25.528 38.197 24.527 A 25.046 25.046 0 0 0 38.2 24.1 L 38.2 11.1 A 23.588 23.588 0 0 0 38.193 10.494 Q 38.172 9.669 38.087 9.287 A 1.378 1.378 0 0 0 38.05 9.15 Q 37.901 8.702 37.007 8.005 A 9.749 9.749 0 0 0 37 8 Q 36.308 7.461 35.852 7.248 A 1.872 1.872 0 0 0 35.6 7.15 Q 35.192 7.028 33.917 7.005 A 35.123 35.123 0 0 0 33.3 7 Z" />
                            </pattern>
                        </defs>
                        <g fill="url(#titlePattern)">
                            <rect className="landing__begin__title" x="-3" y="-5" width="460" height="49" />
                            <rect x="-3" y="43" width="460" height="47" />
                            <rect className="landing__begin__title" x="-3" y="89" width="460" height="44" />
                            <rect x="-3" y="132" width="460" height="50" />
                            <rect className="landing__begin__title" x="-3" y="178" width="460" height="47" />
                            <rect x="-3" y="223" width="460" height="50" />
                        </g>
                    </svg>
                </div>
                <div className="landing__border"></div>
                <div className="landing__middle">
                    <h1 ref={middleRef} className={`landing__middle__title ${middleEntry?.isIntersecting ? "landing__middle__title--active" : ""}`}>We design, build and maintain digital products. We need some extra text here @Ruben</h1>
                </div>
                <div className="landing__border"></div>
                <div ref={endRef} className={`landing__ending ${endEntry?.isIntersecting ? "landing__ending--active" : ""}`}>
                    <PhoneLeft classNameAdded="phoneLeft--blue" messageScreen={messageScreen} overview={!endEntry?.isIntersecting} />
                    <div className="landing__ending__services">
                        <Link to="/services">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 478 90" preserveAspectRatio="xMidYMid meet">
                                <path d="M 34.501 38 L 10.601 38 A 6.306 6.306 0 0 1 7.919 37.376 Q 6.86 36.883 5.801 36 L 3.101 33.7 A 6.53 6.53 0 0 1 1.905 32.46 A 4.606 4.606 0 0 1 1.001 29.7 L 1.001 9 Q 1.001 6 3.401 4 L 5.801 2 A 10.298 10.298 0 0 1 7.488 0.841 Q 9.044 0 10.601 0 L 37.201 0 A 6.306 6.306 0 0 1 39.882 0.624 Q 40.941 1.117 42.001 2 L 44.401 4 A 6.863 6.863 0 0 1 46.041 5.941 A 6.206 6.206 0 0 1 46.801 9 L 46.801 13 L 38.401 13 L 38.401 11.1 A 23.588 23.588 0 0 0 38.393 10.494 Q 38.372 9.669 38.287 9.287 A 1.378 1.378 0 0 0 38.251 9.15 Q 38.101 8.702 37.207 8.005 A 9.749 9.749 0 0 0 37.201 8 Q 36.508 7.461 36.053 7.248 A 1.872 1.872 0 0 0 35.801 7.15 Q 35.392 7.028 34.118 7.005 A 35.123 35.123 0 0 0 33.501 7 L 14.301 7 A 34.966 34.966 0 0 0 13.671 7.005 Q 12.407 7.028 12.001 7.15 A 1.991 1.991 0 0 0 11.697 7.273 Q 11.254 7.491 10.601 8 Q 9.708 8.694 9.553 9.142 A 0.722 0.722 0 0 0 9.551 9.15 A 1.725 1.725 0 0 0 9.492 9.397 Q 9.416 9.839 9.403 10.723 A 26.03 26.03 0 0 0 9.401 11.1 L 9.401 26.9 A 23.588 23.588 0 0 0 9.408 27.506 Q 9.429 28.331 9.514 28.713 A 1.378 1.378 0 0 0 9.551 28.85 Q 9.7 29.298 10.594 29.995 A 9.749 9.749 0 0 0 10.601 30 Q 11.293 30.539 11.749 30.752 A 1.872 1.872 0 0 0 12.001 30.85 Q 12.409 30.972 13.683 30.995 A 35.123 35.123 0 0 0 14.301 31 L 38.201 31 A 6.306 6.306 0 0 1 40.882 31.624 Q 41.941 32.117 43.001 33 L 45.401 35 A 6.863 6.863 0 0 1 47.041 36.941 A 6.206 6.206 0 0 1 47.801 40 L 47.801 61 Q 47.801 64 45.401 66 L 43.001 68 A 10.298 10.298 0 0 1 41.313 69.159 Q 39.757 70 38.201 70 L 9.601 70 A 6.306 6.306 0 0 1 6.919 69.376 Q 5.86 68.883 4.801 68 L 2.401 66 A 6.863 6.863 0 0 1 0.76 64.059 A 6.206 6.206 0 0 1 0.001 61 L 0.001 57 L 8.401 57 L 8.401 58.9 A 23.588 23.588 0 0 0 8.408 59.506 Q 8.429 60.331 8.514 60.713 A 1.378 1.378 0 0 0 8.551 60.85 Q 8.7 61.298 9.594 61.995 A 9.749 9.749 0 0 0 9.601 62 Q 10.293 62.539 10.749 62.752 A 1.872 1.872 0 0 0 11.001 62.85 Q 11.409 62.972 12.683 62.995 A 35.123 35.123 0 0 0 13.301 63 L 34.501 63 A 34.966 34.966 0 0 0 35.13 62.995 Q 36.394 62.972 36.801 62.85 A 1.991 1.991 0 0 0 37.104 62.727 Q 37.547 62.509 38.201 62 Q 39.093 61.306 39.248 60.858 A 0.722 0.722 0 0 0 39.251 60.85 A 1.725 1.725 0 0 0 39.309 60.603 Q 39.385 60.161 39.398 59.277 A 26.03 26.03 0 0 0 39.401 58.9 L 39.401 42.1 A 23.588 23.588 0 0 0 39.393 41.494 Q 39.372 40.669 39.287 40.287 A 1.378 1.378 0 0 0 39.251 40.15 Q 39.101 39.702 38.207 39.005 A 9.749 9.749 0 0 0 38.201 39 Q 37.508 38.461 37.053 38.248 A 1.872 1.872 0 0 0 36.801 38.15 Q 36.392 38.028 35.118 38.005 A 35.123 35.123 0 0 0 34.501 38 Z M 444.301 38 L 420.401 38 A 6.306 6.306 0 0 1 417.719 37.376 Q 416.66 36.883 415.601 36 L 412.901 33.7 A 6.53 6.53 0 0 1 411.705 32.46 A 4.606 4.606 0 0 1 410.801 29.7 L 410.801 9 Q 410.801 6 413.201 4 L 415.601 2 A 10.298 10.298 0 0 1 417.288 0.841 Q 418.844 0 420.401 0 L 447.001 0 A 6.306 6.306 0 0 1 449.682 0.624 Q 450.741 1.117 451.801 2 L 454.201 4 A 6.863 6.863 0 0 1 455.841 5.941 A 6.206 6.206 0 0 1 456.601 9 L 456.601 13 L 448.201 13 L 448.201 11.1 A 23.588 23.588 0 0 0 448.193 10.494 Q 448.172 9.669 448.087 9.287 A 1.378 1.378 0 0 0 448.051 9.15 Q 447.901 8.702 447.007 8.005 A 9.749 9.749 0 0 0 447.001 8 Q 446.308 7.461 445.853 7.248 A 1.872 1.872 0 0 0 445.601 7.15 Q 445.192 7.028 443.918 7.005 A 35.123 35.123 0 0 0 443.301 7 L 424.101 7 A 34.966 34.966 0 0 0 423.471 7.005 Q 422.207 7.028 421.801 7.15 A 1.991 1.991 0 0 0 421.497 7.273 Q 421.054 7.491 420.401 8 Q 419.508 8.694 419.353 9.142 A 0.722 0.722 0 0 0 419.351 9.15 A 1.725 1.725 0 0 0 419.292 9.397 Q 419.216 9.839 419.203 10.723 A 26.03 26.03 0 0 0 419.201 11.1 L 419.201 26.9 A 23.588 23.588 0 0 0 419.208 27.506 Q 419.229 28.331 419.314 28.713 A 1.378 1.378 0 0 0 419.351 28.85 Q 419.5 29.298 420.394 29.995 A 9.749 9.749 0 0 0 420.401 30 Q 421.093 30.539 421.549 30.752 A 1.872 1.872 0 0 0 421.801 30.85 Q 422.209 30.972 423.483 30.995 A 35.123 35.123 0 0 0 424.101 31 L 448.001 31 A 6.306 6.306 0 0 1 450.682 31.624 Q 451.741 32.117 452.801 33 L 455.201 35 A 6.863 6.863 0 0 1 456.841 36.941 A 6.206 6.206 0 0 1 457.601 40 L 457.601 61 Q 457.601 64 455.201 66 L 452.801 68 A 10.298 10.298 0 0 1 451.113 69.159 Q 449.557 70 448.001 70 L 419.401 70 A 6.306 6.306 0 0 1 416.719 69.376 Q 415.66 68.883 414.601 68 L 412.201 66 A 6.863 6.863 0 0 1 410.56 64.059 A 6.206 6.206 0 0 1 409.801 61 L 409.801 57 L 418.201 57 L 418.201 58.9 A 23.588 23.588 0 0 0 418.208 59.506 Q 418.229 60.331 418.314 60.713 A 1.378 1.378 0 0 0 418.351 60.85 Q 418.5 61.298 419.394 61.995 A 9.749 9.749 0 0 0 419.401 62 Q 420.093 62.539 420.549 62.752 A 1.872 1.872 0 0 0 420.801 62.85 Q 421.209 62.972 422.483 62.995 A 35.123 35.123 0 0 0 423.101 63 L 444.301 63 A 34.966 34.966 0 0 0 444.93 62.995 Q 446.194 62.972 446.601 62.85 A 1.991 1.991 0 0 0 446.904 62.727 Q 447.347 62.509 448.001 62 Q 448.893 61.306 449.048 60.858 A 0.722 0.722 0 0 0 449.051 60.85 A 1.725 1.725 0 0 0 449.109 60.603 Q 449.185 60.161 449.198 59.277 A 26.03 26.03 0 0 0 449.201 58.9 L 449.201 42.1 A 23.588 23.588 0 0 0 449.193 41.494 Q 449.172 40.669 449.087 40.287 A 1.378 1.378 0 0 0 449.051 40.15 Q 448.901 39.702 448.007 39.005 A 9.749 9.749 0 0 0 448.001 39 Q 447.308 38.461 446.853 38.248 A 1.872 1.872 0 0 0 446.601 38.15 Q 446.192 38.028 444.918 38.005 A 35.123 35.123 0 0 0 444.301 38 Z M 73.701 63 L 110.101 63 L 110.101 70 L 65.301 70 L 65.301 0 L 110.101 0 L 110.101 7 L 73.701 7 L 73.701 31 L 104.501 31 L 104.501 38 L 73.701 38 L 73.701 63 Z M 358.401 63 L 394.801 63 L 394.801 70 L 350.001 70 L 350.001 0 L 394.801 0 L 394.801 7 L 358.401 7 L 358.401 31 L 389.201 31 L 389.201 38 L 358.401 38 L 358.401 63 Z M 335.101 9 L 335.101 13 L 326.701 13 L 326.701 11.1 A 23.588 23.588 0 0 0 326.693 10.494 Q 326.672 9.669 326.587 9.287 A 1.378 1.378 0 0 0 326.551 9.15 Q 326.401 8.702 325.507 8.005 A 9.749 9.749 0 0 0 325.501 8 Q 324.808 7.461 324.353 7.248 A 1.872 1.872 0 0 0 324.101 7.15 Q 323.692 7.028 322.418 7.005 A 35.123 35.123 0 0 0 321.801 7 L 297.001 7 A 34.966 34.966 0 0 0 296.371 7.005 Q 295.107 7.028 294.701 7.15 A 1.991 1.991 0 0 0 294.397 7.273 Q 293.954 7.491 293.301 8 Q 292.408 8.694 292.253 9.142 A 0.722 0.722 0 0 0 292.251 9.15 A 1.725 1.725 0 0 0 292.192 9.397 Q 292.116 9.839 292.103 10.723 A 26.03 26.03 0 0 0 292.101 11.1 L 292.101 58.9 A 23.588 23.588 0 0 0 292.108 59.506 Q 292.129 60.331 292.214 60.713 A 1.378 1.378 0 0 0 292.251 60.85 Q 292.4 61.298 293.294 61.995 A 9.749 9.749 0 0 0 293.301 62 Q 293.993 62.539 294.449 62.752 A 1.872 1.872 0 0 0 294.701 62.85 Q 295.109 62.972 296.383 62.995 A 35.123 35.123 0 0 0 297.001 63 L 321.801 63 A 34.966 34.966 0 0 0 322.43 62.995 Q 323.694 62.972 324.101 62.85 A 1.991 1.991 0 0 0 324.404 62.727 Q 324.847 62.509 325.501 62 Q 326.393 61.306 326.548 60.858 A 0.722 0.722 0 0 0 326.551 60.85 A 1.725 1.725 0 0 0 326.609 60.603 Q 326.685 60.161 326.698 59.277 A 26.03 26.03 0 0 0 326.701 58.9 L 326.701 57 L 335.101 57 L 335.101 61 Q 335.101 64 332.701 66 L 330.301 68 A 10.298 10.298 0 0 1 328.613 69.159 Q 327.057 70 325.501 70 L 293.301 70 A 6.306 6.306 0 0 1 290.619 69.376 Q 289.56 68.883 288.501 68 L 286.101 66 A 6.863 6.863 0 0 1 284.46 64.059 A 6.206 6.206 0 0 1 283.701 61 L 283.701 9 Q 283.701 6 286.101 4 L 288.501 2 A 10.298 10.298 0 0 1 290.188 0.841 Q 291.744 0 293.301 0 L 325.501 0 A 6.306 6.306 0 0 1 328.182 0.624 Q 329.241 1.117 330.301 2 L 332.701 4 A 6.863 6.863 0 0 1 334.341 5.941 A 6.206 6.206 0 0 1 335.101 9 Z M 214.901 63.8 L 215.301 63.8 A 2.377 2.377 0 0 1 215.329 63.471 Q 215.408 62.929 215.7 61.889 A 41.06 41.06 0 0 1 215.901 61.2 L 234.901 0 L 243.801 0 L 220.601 70 L 209.601 70 L 186.401 0 L 195.301 0 L 214.301 61.2 A 40.902 40.902 0 0 1 214.504 61.901 Q 214.812 62.998 214.881 63.537 A 2.136 2.136 0 0 1 214.901 63.8 Z M 127.601 70 L 127.601 0 L 164.601 0 A 6.306 6.306 0 0 1 167.282 0.624 Q 168.341 1.117 169.401 2 L 171.801 4 A 6.863 6.863 0 0 1 173.441 5.941 A 6.206 6.206 0 0 1 174.201 9 L 174.201 32.4 A 6.441 6.441 0 0 1 172.112 37.232 A 8.553 8.553 0 0 1 171.701 37.6 L 169.201 39.7 A 8.743 8.743 0 0 1 167.38 40.865 A 6.485 6.485 0 0 1 164.601 41.5 L 159.001 41.5 L 169.301 57.5 Q 170.246 58.962 170.712 59.499 A 2.884 2.884 0 0 0 170.851 59.65 A 2.892 2.892 0 0 0 171.125 59.886 Q 171.601 60.253 172.58 60.818 A 35.331 35.331 0 0 0 172.901 61 L 174.001 61.6 A 18.078 18.078 0 0 1 174.623 61.961 Q 175.635 62.577 175.981 63.016 A 1.085 1.085 0 0 1 176.101 63.2 Q 176.348 63.696 176.392 65.352 A 28.875 28.875 0 0 1 176.401 66.1 L 176.401 70 L 173.901 70 Q 172.101 70 171.451 69.8 A 2.777 2.777 0 0 1 171.094 69.657 Q 170.491 69.373 169.435 68.66 A 34.351 34.351 0 0 1 169.201 68.5 L 167.301 67.2 Q 165.101 65.7 163.701 63.3 L 150.401 42 L 136.001 42 L 136.001 70 L 127.601 70 Z M 255.301 70 L 255.301 0 L 263.701 0 L 263.701 70 L 255.301 70 Z M 160.901 7 L 136.001 7 L 136.001 35 L 160.901 35 A 34.966 34.966 0 0 0 161.53 34.995 Q 162.794 34.972 163.201 34.85 A 1.991 1.991 0 0 0 163.504 34.727 Q 163.947 34.509 164.601 34 Q 165.493 33.306 165.648 32.858 A 0.722 0.722 0 0 0 165.651 32.85 A 1.725 1.725 0 0 0 165.709 32.603 Q 165.785 32.161 165.798 31.277 A 26.03 26.03 0 0 0 165.801 30.9 L 165.801 11.1 A 23.588 23.588 0 0 0 165.793 10.494 Q 165.772 9.669 165.687 9.287 A 1.378 1.378 0 0 0 165.651 9.15 Q 165.501 8.702 164.607 8.005 A 9.749 9.749 0 0 0 164.601 8 Q 163.908 7.461 163.453 7.248 A 1.872 1.872 0 0 0 163.201 7.15 Q 162.792 7.028 161.518 7.005 A 35.123 35.123 0 0 0 160.901 7 Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer classNameAdded=""/>
        </>
    );
}

export default Landing;
