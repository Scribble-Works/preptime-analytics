export const reportStyles = `
/* REPORT PAGE STYLING */
.load-container {
    width: 100%;
    height: min(87vh, 645px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.report,
.report-content {
    width: 100%;
    height: max-content;
}

.header-bar {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    background-image: linear-gradient(to top right, #fc260099, #ff3f5f);
    position: relative;
    border-radius: 0px 0px 40px 40px;
    box-shadow: 5px 5px 10px #fc260099;
    margin-bottom: 40px;
}

.header-bar::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://picsum.photos/1920/1080?random);
    background-size: cover;
    border-radius: 0px 0px 40px 40px;
    z-index: -1;
}

.header-text {
    text-align: center;
    margin-bottom: 15px;
}

.bold {
    font-weight: bold;
}

.header-text h1 {
    font-size: 22px;
    font-weight: bold;
}

.header-text h3 {
    font-size: 18px;
    font-weight: bold;
}

.hd-action {
    font-size: 16px;
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
}

.hd-action:first-of-type .fas {
    margin-right: 5px;
}

.summary-content {
    width: min(100% - 20px, 1100px);
    margin: 0 auto;
}

.meta {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
}

.report .school,
.report .subject {
    font-size: 20px;
}

.meta-txt {
    font-size: 16px;
}

.date .fas {
    margin-right: 6px;
}

.max-min {
    width: 100%;
    height: max-content;
    margin-bottom: 30px;
}

.min-max-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(100%, 1100px);
    margin-inline: auto;
}

.minmax-blk {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: min(100%, 550px);
    align-items: center;
    border-radius: 5px;
    box-shadow: 5px 5px 15px rgba(0,0,0,.1);
}

.max {
    background: #385F73;
    margin-bottom: 20px;
}

.min {
    background: #ff3f5f;
}

.minmax-txt {
    margin-right: 25px;
}

.minmax-txt h4 {
    color: #fff;
    font-size: 16px;
}

.minmax-txt p {
    color: hsla(0,0%,100%,.7);
}

.score {
    font-weight: bold;
    font-size: 35px;
    color: #fff;
}

.sect-title {
    width: 100%;
    height: max-content;
    margin-block: 50px;
}

.sect-title h1 {
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 15px;
    text-align: center;
}

.missed-ques {
    padding: 10px;
    display: flex;
    flex-direction: column;
    color: #fff;
    background: #ff3f5f;
    border-radius: 5px;
    box-shadow: 5px 5px 15px rgba(0,0,0,.1);
    margin-bottom: 15px;
    margin-inline: auto;
    max-width: 800px;
}

.pct {
    font-size: 18px;
    align-self: flex-end;
    margin-top: 5px;
}

.foot-note {
    width: 100%;
    height: max-content;
    padding: 15px 0;
    background: #e2e2e2;
}

.foot-content {
    width: min(100% - 20px, 1000px);
    margin-inline: auto;
    font-size: 14px;
    text-align: center;
}

.info {
    width: min(80%, 500px);
    margin-inline: auto;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 11px;
    margin-bottom: 25px;
    padding: 10px 15px;
    border-radius: 8px;
    background-color: rgb(229, 246, 253);
    color: rgb(1, 67, 97);
}

.info .fas {
    margin-right: 10px;
    font-size: 16px;
}

.banner {
    width: min(100% - 20px, 1100px);
    margin: 0 auto 100px;
    border: 1px solid rgba(0,0,0,.2);
}

.banner-content {
    padding: 15px;
    display: flex;
    justify-content: space-between;
}

.banner .img-wrapper {
    width: min(100%, 50px);
    height: 50px;
    align-self: center;
}

.banner .img-wrapper img {
    width: 100%;
    height: 100%;
}

.banner-text {
    text-align: right;
    font-weight: bold;
}

.banner-text h1,
.banner-text h3 {
    text-transform: uppercase;
}

@media screen and (min-width: 600px) {

    .banner {
        margin-bottom: 150px;
    }

    .banner .img-wrapper {
        width: min(100%, 80px);
        height: 80px;
    }

    .banner-text h1 {
        font-size: 25px;
    }

    .banner-text h3 {
        font-size: 18px;
    }
}

@media screen and (min-width: 768px) {
    .banner {
        margin-bottom: 150px;
    }

    .banner .img-wrapper {
        width: min(100%, 100px);
        height: 100px;
    }

    .banner-text h1 {
        font-size: 30px;
    }

    .banner-text h3 {
        font-size: 20px;
    }

    .report .school,
    .report .subject {
        font-size: 30px;
    }

    .meta-txt {
        font-size: 18px;
    }

    .min-max-flex {
        flex-direction: row;
        justify-content: space-between;
    }

    .max {
        margin-bottom: 0;
        margin-right: 30px;
    }

    .score {
        font-size: 50px;
    }

    .minmax-txt h4 {
        font-size: 18px;
    }

    .missed-ques {
        flex-direction: row;
        justify-content: space-between;
    }

    .ques {
        margin-right: 20px;
    }

    .pct {
        margin-top: 0;
        white-space: nowrap;
    }

    .info {
        text-align: left;
        font-size: 12px;
    }
}

@media screen and (min-width: 1200px) {
    .banner-text h1 {
        font-size: 38px;
    }

    .banner-text h3 {
        font-size: 24px;
    }

    .report .school,
    .report .subject {
        font-size: 40px;
    }

    .meta-txt {
        font-size: 20px;
    }

    .foot-content {
        font-size: 15px;
    }
}
`