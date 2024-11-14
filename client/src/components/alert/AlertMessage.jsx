import {  Check, X,  } from 'lucide-react';

const AlertMessage = ({ status }) => {
    const alerts = {
      success: {
        containerClass: "bg-green-50 border-l-4 border-green-400 p-4",
        icon: <Check className="w-5 h-5 text-green-400" />,
        title: "Authentication Successful",
        message: "Your identity has been verified.",
        textColor: "text-green-700"
      },
      failed: {
        containerClass: "bg-red-50 border-l-4 border-red-400 p-4",
        icon: <X className="w-5 h-5 text-red-400" />,
        title: "Authentication Failed",
        message: "Please try again.",
        textColor: "text-red-700"
      },
      error: {
        containerClass: "bg-red-50 border-l-4 border-red-400 p-4",
        icon: <X className="w-5 h-5 text-red-400" />,
        title: "Camera Error",
        message: "Unable to access camera. Please check permissions.",
        textColor: "text-red-700"
      }
    };

    const alert = alerts[status];
    if (!alert) return null;

    return (
      <div className={alert.containerClass}>
        <div className="flex items-start">
          <div className="flex-shrink-0">{alert.icon}</div>
          <div className="ml-3">
            <h3 className={`text-sm font-medium ${alert.textColor}`}>
              {alert.title}
            </h3>
            <p className={`mt-1 text-sm ${alert.textColor}`}>
              {alert.message}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AlertMessage