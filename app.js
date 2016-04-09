angular.module('blackBox', []);

angular.module('blackBox')
.controller('mainController', ['$scope', '$sce', function($scope, $sce){

  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

  $scope.navOpen = false;
  $scope.openNav = function() {
    if ($scope.navOpen === false) {
      $scope.navOpen = true;
    } else if ($scope.navOpen === true) {
      $scope.navOpen = false;
    }
  }

  $scope.logo = 'blkbox';

  $scope.menu = {
    item: 'about',
    copyLine1: 'We Are BlkBox.',
    copyLine2: 'Get Uncomfortable.',
    contactCopy: 'Have Questions? We have',
    contactLink: 'Answers.'
  }

  $scope.slides = [
    {
      preTitle: '',
      title: 'Get Uncomfortable',
      postTitle: '',
      action: ''
    },
    {
      preTitle: '',
      title: "French's",
      postTitle: 'Concept & Ideation, Digital Video Production, Digital Media Strategy',
      action: 'Watch Video',
      video: 'video/frenchs.mp4',
      still: 'images/frenchs-still.jpg',
      image: 'images/frenchs.gif'
    },
    {
      preTitle: "Ethel's got hot sauce in her back *swag",
      title: "Frank's Red Hot",
      postTitle: 'Insights & analytics, brand identity, brand strategy, digital media strategy, intergrated Creative Campaign, Video Production',
      action: 'Watch Video',
      video: 'video/franks.mp4',
      still: 'images/franks-still.jpg',
      image: 'images/franks.gif'
    },
    {
      preTitle: 'Finding insight in a sea of data',
      title: "Piercing Pagoda",
      postTitle: 'Established business objectives, insights & analytics, assess the landscape',
      action: ''
    },
    {
      preTitle: 'Inspiring growth with fresh insight',
      title: "BeachBody",
      postTitle: 'Insights & Analytics, Established business objectives, brand identity, brand strategy, action plan, marketing execution',
      action: '',
      still: 'images/beachbody-still.jpg',
      image: 'images/beachbody.gif'
    },
    {
      preTitle: 'Infusing sizzle in every brand experience',
      title: "Facebook",
      postTitle: 'Experiential and PR',
      action: '',
      still: 'images/facebook-still.jpg',
      image: 'images/facebook.gif'
    }
  ];

  $scope.contact = {
    title: 'Want to know more?',
    postTitle: 'of course you do.',
    button: 'more',
    email: 'hello@blkbox.com'
  }

  $scope.footer = {
    company: 'BLKBOX',
    rights: 'All rights reserved',
    location: 'New York<NewYork',
    preCreator: 'Built by',
    creatorLink: 'http://wethem.us',
    creator: '.us',
    facebookIcon: 'fa-facebook',
    facebookLink: '',
    twitterIcon: 'fa-twitter',
    twitterLink: '',
    instagramIcon: 'fa-instagram',
    instagramLink: '',
    tumblrIcon: 'fa-tumblr',
    tumblrLink: ''
  }

}]);

