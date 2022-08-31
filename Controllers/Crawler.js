const { startProcess, qiniuUpload } = require('../libs/utils'),
  { addSliderData } = require('../services/Slider'),
  { addAgencyInfo } = require('../services/AgencyInfo'),
  { addRecomCourse } = require('../services/RecomCourse'),
  { addCollection } = require('../services/Collection'),
  { addTeacherData } = require('../services/Teacher'),
  { addStudentData } = require('../services/Student'),
  { addCourseTab } = require('../services/CourseTab'),
  { addCourseData } = require('../services/Course'),
  { addAboutus } = require('../services/Aboutus'),
  { qiniu } = require('../config/config');
// config = require('../config/config');


// 创建一个爬虫的controller是一个类并导出这个类的实例,当路由匹配到这个controller，就会执行
class Crawler {
  // 定义一个爬取slider的函数，在这个函数中调用startProcess和qiniuUpload方法
  crawlSliderData() {
    startProcess({
      path: '../crawlers/slider',
      // 监听子进程的数据
      async message(data) {
        // console.log(data);
        data.map(async item => {
          if (item.imgUrl && !item.imgKey) {
            // const qiniu = config.qiniu;

            try {
              // 把图片通过qiniuUpload上传到七牛之后得到一个新的名称即key(由nanoid + 后缀名组成)
              const imgData = await qiniuUpload({
                url: item.imgUrl,
                bucket: qiniu.bucket.tximg.bucket_name,
                ext: '.jpg',
              });
              // 为数据的imgKey赋值
              if (imgData.key) {
                item.imgKey = imgData.key;
              }

              // 把数据添加进数据库中
              const result = await addSliderData(item);
              if (result) {
                console.log('Data created');
              } else {
                console.log('Failed to create data');
              }

              console.log(imgData);
            } catch (error) {
              console.log(error);
            }
          }
        });
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      }
    });
  }

  // 定义爬取 agencyinfo 的controller
  crawlAgencyInfo() {
    startProcess({
      path: '../crawlers/agencyInfo',
      async message(data) {
        // 这里是data并不是item，因为并没有遍历data哈
        if (data.logoUrl && !data.logoKey) {
          // const qiniu = config.qiniu;
          try {
            // 把图片通过qiniuUpload上传到七牛之后得到一个新的名称即key(由nanoid + 后缀名组成)
            const logoData = await qiniuUpload({
              url: data.logoUrl,
              bucket: qiniu.bucket.tximg.bucket_name,
              ext: '.jpg',
            });
            // 为数据的imgKey赋值
            if (logoData.key) {
              data.logoKey = logoData.key;
            }

            const result = await addAgencyInfo(data);

            if (result) {
              console.log('Data created OK');
            } else {
              console.log('Data created failed');
            }

          } catch (error) {
            console.log(error);
          }
        }
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      },
    });
  }

  // 定义爬取 recomCourse 的controller
  crawlRecomCourse() {
    startProcess({
      path: '../crawlers/recomCourse',
      async message(data) {
        data.map(async (item) => {
          try {
            // const qiniu = config.qiniu;
            if (item.posterUrl && !item.posterKey) {
              // 把图片通过qiniuUpload上传到七牛之后得到一个新的名称即key(由nanoid + 后缀名组成)
              const posterData = await qiniuUpload({
                url: item.posterUrl,
                bucket: qiniu.bucket.tximg.bucket_name,
                ext: '.jpg',
              });

              if (posterData.key) {
                item.posterKey = posterData.key;
              }
            }
            if (item.teacherImg && !item.teacherImgKey) {
              const teacherImgData = await qiniuUpload({
                url: item.teacherImg,
                bucket: qiniu.bucket.tximg.bucket_name,
                ext: '.jpg',
              });

              if (teacherImgData.key) {
                item.teacherImgKey = teacherImgData.key;
              }
            }
            console.log(item);

            const result = await addRecomCourse(item);
            if (result) {
              console.log('Data created OK');
            } else {
              console.log('Data created failed');
            }
          } catch (error) {
            console.log(error);
          }
        });
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      },
    });
  }

  crawlCollection() {
    startProcess({
      path: '../crawlers/collection',
      async message(data) {
        data.map(async (item) => {
          if (item.posterUrl && !item.posterKey) {
            // const qiniu = config.qiniu;

            try {
              // 把图片通过qiniuUpload上传到七牛之后得到一个新的名称即key(由nanoid + 后缀名组成)
              const posterData = await qiniuUpload({
                url: item.posterUrl,
                bucket: qiniu.bucket.tximg.bucket_name,
                ext: '.jpg',
              });
              // 为数据的imgKey赋值
              if (posterData.key) {
                item.posterKey = posterData.key;
              }

              // 把数据添加进数据库中
              const result = await addCollection(item);
              if (result) {
                console.log('Data created');
              } else {
                console.log('Failed to create data');
              }

              // console.log(imgData);
            } catch (error) {
              console.log(error);
            }
          }
        });
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      }
    });
  }

  async crawlTeacher() {
    startProcess({
      path: '../crawlers/teacher',
      async message(data) {
        data.map(async (item) => {
          if (item.teacherImg && !item.teacherImgKey) {
            // const qiniu = config.qiniu;
            try {
              const imgData = await qiniuUpload({
                url: item.teacherImg,
                bucket: qiniu.bucket.tximg.bucket_name,
                ext: '.jpg',
              });
              // 为数据的imgKey赋值
              if (imgData.key) {
                item.teacherImgKey = imgData.key;
              }

              const result = await addTeacherData(item);
              if (result) {
                console.log('Data created OK');
              } else {
                console.log('Failed to create data');
              }

              // console.log(imgData);
            } catch (error) {
              console.log(error);
            }
          }
        });
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      }
    });
  }

  async crawlStudent() {
    startProcess({
      path: '../crawlers/student',
      async message(data) {
        data.map(async (item) => {
          if (item.studentImg && !item.studentImgKey) {
            // const qiniu = config.qiniu;
            try {
              const imgData = await qiniuUpload({
                url: item.studentImg,
                bucket: qiniu.bucket.tximg.bucket_name,
                ext: '.jpg',
              });
              // 为数据的imgKey赋值
              if (imgData.key) {
                item.studentImgKey = imgData.key;
              }

              const result = await addStudentData(item);
              if (result) {
                console.log('Data created OK');
              } else {
                console.log('Failed to create data');
              }

              // console.log(imgData);
            } catch (error) {
              console.log(error);
            }
          }
        });
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      }
    });
  }

  crawlCourseTab() {
    startProcess({
      path: '../crawlers/courseTab',
      async message(data) {
        data.map(async (item) => {
          console.log(item);
          const result = await addCourseTab(item);
          if (result) {
            console.log('Data created OK');
          } else {
            console.log('Failed to create data');
          }
        });
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      }
    });
  }

  crawlCourseData() {
    startProcess({
      path: '../crawlers/course',
      async message(data) {
        data.map(async (item) => {
          // console.log(item);
          try {
            // const qiniu = config.qiniu;
            if (item.posterUrl && !item.posterKey) {
              // 把图片通过qiniuUpload上传到七牛之后得到一个新的名称即key(由nanoid + 后缀名组成)
              const posterData = await qiniuUpload({
                url: item.posterUrl,
                bucket: qiniu.bucket.tximg.bucket_name,
                ext: '.jpg',
              });

              if (posterData.key) {
                item.posterKey = posterData.key;
              }
            }

            const result = await addCourseData(item);
            if (result) {
              console.log('Data created OK');
            } else {
              console.log('Data created failed');
            }
          } catch (error) {
            console.log(error);
          }
        });
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      },
    });
  }

  crawlAboutus() {
    startProcess({
      path: '../crawlers/aboutus',
      async message(data) {
        if (data.posterUrl && !data.posterKey) {
          try {
            // const qiniu = config.qiniu;
            // 把图片通过qiniuUpload上传到七牛之后得到一个新的名称即key(由nanoid + 后缀名组成)
            const posterData = await qiniuUpload({
              url: data.posterUrl,
              bucket: qiniu.bucket.tximg.bucket_name,
              ext: '.jpg',
            });

            if (posterData.key) {
              data.posterKey = posterData.key;
            }

            const result = await addAboutus(data);

            if (result) {
              console.log('Data created OK');
            } else {
              console.log('Data created failed');
            }
          } catch (error) {
            console.log(error);
          }
        }
      },
      async exit(code) {
        console.log(code);
      },
      async error(error) {
        console.log(error);
      },
    });
  }
}

module.exports = new Crawler();