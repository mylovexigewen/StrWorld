const buttonLeft = document.getElementById('buttonLeft');
const buttonRight = document.getElementById('buttonRight');

const carouselDown1 = document.getElementById('carouselDown1');
const carouselDown2 = document.getElementById('carouselDown2');
const carouselDown3 = document.getElementById('carouselDown3');

const carouselImages1 = document.getElementById('carouselImages1');
const carouselImages2 = document.getElementById('carouselImages2');
const carouselImages3 = document.getElementById('carouselImages3');

carouselImages1.style.transition = 'all 0.3s ease';
carouselImages2.style.transition = 'all 0.3s ease';
carouselImages3.style.transition = 'all 0.3s ease';

document.addEventListener("DOMContentLoaded", function() {
    carouselDown1.style.transform = 'scale(1.2)';
    carouselDown1.style.backgroundColor = '#dedede';
});

carouselDown1.addEventListener('click', () => {
    setTimeout (() => {
        carouselImages1.style.transform = 'translateX(0)';
        carouselImages2.style.transform = 'translateX(100%) translateY(-100%)';
        carouselImages3.style.transform = 'translateX(200%) translateY(-200%)';
    });

    if (carouselDown2.style.transform === 'scale(1.2)') {
        carouselDown2.style.transform = 'scale(1)';
        carouselDown2.style.backgroundColor = '#857c7c9a';
        carouselDown1.style.transform = 'scale(1.2)';
        carouselDown1.style.backgroundColor = '#dedede';
    }

    if (carouselDown3.style.transform === 'scale(1.2)') {
        carouselDown3.style.transform = 'scale(1)';
        carouselDown3.style.backgroundColor = '#857c7c9a';
        carouselDown1.style.transform = 'scale(1.2)';
        carouselDown1.style.backgroundColor = '#dedede';
    }

});

carouselDown2.addEventListener('click', () => {
    setTimeout (() => {
        carouselImages1.style.transform = 'translateX(-100%)';
        carouselImages2.style.transform = 'translateX(0) translateY(-100%)';
        carouselImages3.style.transform = 'translateX(100%) translateY(-200%)';
    });

    if (carouselDown1.style.transform === 'scale(1.2)') {
        carouselDown1.style.transform = 'scale(1)';
        carouselDown1.style.backgroundColor = '#857c7c9a';
        carouselDown2.style.transform = 'scale(1.2)';
        carouselDown2.style.backgroundColor = '#dedede';
    }

    if (carouselDown3.style.transform === 'scale(1.2)') {
        carouselDown3.style.transform = 'scale(1)';
        carouselDown3.style.backgroundColor = '#857c7c9a';
        carouselDown2.style.transform = 'scale(1.2)';
        carouselDown2.style.backgroundColor = '#dedede';
    }

});

carouselDown3.addEventListener('click', () => {
    setTimeout (() => {
        carouselImages1.style.transform = 'translateX(-200%)';
        carouselImages2.style.transform = 'translateX(-100%) translateY(-100%)';
        carouselImages3.style.transform = 'translateX(0) translateY(-200%)';
    });

    if (carouselDown2.style.transform === 'scale(1.2)') {
        carouselDown2.style.transform = 'scale(1)';
        carouselDown2.style.backgroundColor = '#857c7c9a';
        carouselDown3.style.transform = 'scale(1.2)';
        carouselDown3.style.backgroundColor = '#dedede';
    }

    if (carouselDown1.style.transform === 'scale(1.2)') {
        carouselDown1.style.transform = 'scale(1)';
        carouselDown1.style.backgroundColor = '#857c7c9a';
        carouselDown3.style.transform = 'scale(1.2)';
        carouselDown3.style.backgroundColor = '#dedede';
    }

});

    async function runInfiniteLoop() {
        let i = 0; // 初始化计数器
        while (true) { // 无限循环
            await performTask(i); // 等待任务完成
            i++; // 增加计数器
        }
    }

    async function performTask(i) {
        return new Promise((resolve) => {
            setTimeout (() => {
                if (carouselDown1.style.transform === 'scale(1.2)') {
                    carouselImages1.style.transform = 'translateX(-100%)';
                    carouselImages2.style.transform = 'translateX(0) translateY(-100%)';
                    carouselImages3.style.transform = 'translateX(100%) translateY(-200%)';
                    carouselDown1.style.transform = 'scale(1)';
                    carouselDown1.style.backgroundColor = '#857c7c9a';
                    carouselDown2.style.transform = 'scale(1.2)';
                    carouselDown2.style.backgroundColor = '#dedede';
                }
               
            }, 6000);
            setTimeout (() => {
                if (carouselDown2.style.transform === 'scale(1.2)') {
                    carouselImages1.style.transform = 'translateX(-200%)';
                    carouselImages2.style.transform = 'translateX(-100%) translateY(-100%)';
                    carouselImages3.style.transform = 'translateX(0) translateY(-200%)';
                    carouselDown2.style.transform = 'scale(1)';
                    carouselDown2.style.backgroundColor = '#857c7c9a';
                    carouselDown3.style.transform = 'scale(1.2)';
                    carouselDown3.style.backgroundColor = '#dedede';
            
                }
                
            }, 12000);
            setTimeout (() => {
                if (carouselDown3.style.transform === 'scale(1.2)') {
                    carouselImages1.style.transform = 'translateX(0)';
                    carouselImages2.style.transform = 'translateX(100%) translateY(-100%)';
                    carouselImages3.style.transform = 'translateX(200%) translateY(-200%)';
                    carouselDown3.style.transform = 'scale(1)';
                    carouselDown3.style.backgroundColor = '#857c7c9a';
                    carouselDown1.style.transform = 'scale(1.2)';
                    carouselDown1.style.backgroundColor = '#dedede';
                }
                resolve();

            }, 18000);
        });
    }
    // 调用无限循环函数
    runInfiniteLoop();

        buttonRight.addEventListener('click', () => {
            if (carouselDown2.style.transform === 'scale(1.2)') {
                carouselImages1.style.transform = 'translateX(-200%)';
                carouselImages2.style.transform = 'translateX(-100%) translateY(-100%)';
                carouselImages3.style.transform = 'translateX(0) translateY(-200%)';
                carouselDown2.style.transform = 'scale(1)';
                carouselDown2.style.backgroundColor = '#857c7c9a';
                carouselDown3.style.transform = 'scale(1.2)';
                carouselDown3.style.backgroundColor = '#dedede';
            }

            if (carouselDown1.style.transform === 'scale(1.2)') {
                carouselImages1.style.transform = 'translateX(-100%)';
                carouselImages2.style.transform = 'translateX(0) translateY(-100%)';
                carouselImages3.style.transform = 'translateX(100%) translateY(-200%)';
                carouselDown1.style.transform = 'scale(1)';
                carouselDown1.style.backgroundColor = '#857c7c9a';
                carouselDown2.style.transform = 'scale(1.2)';
                carouselDown2.style.backgroundColor = '#dedede';
            }
        });

        buttonLeft.addEventListener('click', () => {
            if (carouselDown2.style.transform === 'scale(1.2)') {
                carouselImages1.style.transform = 'translateX(0)';
                carouselImages2.style.transform = 'translateX(100%) translateY(-100%)';
                carouselImages3.style.transform = 'translateX(200%) translateY(-200%)';
                carouselDown2.style.transform = 'scale(1)';
                carouselDown2.style.backgroundColor = '#857c7c9a';
                carouselDown1.style.transform = 'scale(1.2)';
                carouselDown1.style.backgroundColor = '#dedede';
            }

            if (carouselDown3.style.transform === 'scale(1.2)') {
                carouselImages1.style.transform = 'translateX(-200%)';
                carouselImages2.style.transform = 'translateX(0) translateY(-100%)';
                carouselImages3.style.transform = 'translateX(100%) translateY(-200%)';
                carouselDown3.style.transform = 'scale(1)';
                carouselDown3.style.backgroundColor = '#857c7c9a';

                carouselDown2.style.transform = 'scale(1.2)';
                carouselDown2.style.backgroundColor = '#dedede';
            }
            
        });
