<template>
    <div
      v-if="show"
      class="toast-notification"
      :class="{ 'error': type === 'error' }"
    >
      <div class="toast-content">
        <span v-if="type === 'error'" class="toast-icon"><img src="../assets/user1.png" alt="patient"></span>
        <p>The next patient</p>
      
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToastNotification',
    data() {
      return {
        show: false,
        type: 'error'
      }
    },
    methods: {
      showToast(message, type = 'error') {
        this.show = true;
        this.message = message;
        this.type = type;
        setTimeout(() => {
          this.show = false;
        }, 60000);
      }
    }
  }
  </script>
  
  <style scoped>
  .toast-notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    top:0%;
    transform: translateX(-50%);
    background-color: #03c6c1;
    color: #fff;
    padding: 15px 20px;
    border-radius: 4px;
    z-index: 999;
    transition: all 0.3s ease;
    width:500px;
    height:25px;
  }
  
  
  .toast-notification.error {
    background-color: #03c6c1;
  }
  
  .toast-content {
    display: flex;
    align-items: center;
  }
  
  .toast-icon {
    font-size: 1.2rem;
    margin-right: 10px;
  }
  </style>