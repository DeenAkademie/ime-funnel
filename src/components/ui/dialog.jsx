import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

DialogOverlay.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

const DialogContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            type: 'tween',
            duration: 0.2,
            ease: 'easeOut',
          }}
        >
          <DialogPrimitive.Content
            ref={ref}
            className={cn(
              'fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%]',
              'max-h-[90vh] overflow-y-auto',
              'gap-4 border bg-background shadow-lg p-6',
              'sm:max-w-lg sm:rounded-lg',
              className
            )}
            {...props}
          >
            {children}
            <DialogPrimitive.Close className='absolute right-4 top-4 rounded-full p-2 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none'>
              <X className='h-8 w-8' />
              <span className='sr-only'>Close</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </motion.div>
      </AnimatePresence>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

DialogContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

const DialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

DialogHeader.propTypes = {
  className: PropTypes.string,
};

const DialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

DialogFooter.propTypes = {
  className: PropTypes.string,
};

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

DialogTitle.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

DialogDescription.propTypes = {
  className: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
};
