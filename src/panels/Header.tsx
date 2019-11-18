import * as React from 'react';

export interface HeaderProps {
  prefixCls: string;
  /** Last one step */
  onPrev?: () => void;
  /** Next one step */
  onNext?: () => void;
  /** Last multiple steps */
  onSuperPrev: () => void;
  /** Next multiple steps */
  onSuperNext: () => void;

  children?: React.ReactNode;
}

function Header({
  prefixCls,
  onSuperPrev,
  onSuperNext,
  onPrev,
  onNext,
  children,
}: HeaderProps) {
  return (
    <div className={prefixCls}>
      {onSuperPrev && (
        <button type="button" onClick={onSuperPrev}>
          {'\u00AB'}
        </button>
      )}
      {onPrev && (
        <button type="button" onClick={onPrev}>
          {'\u2039'}
        </button>
      )}
      <div className={`${prefixCls}-view`}>{children}</div>
      {onNext && (
        <button type="button" onClick={onNext}>
          {'\u203A'}
        </button>
      )}
      {onSuperNext && (
        <button type="button" onClick={onSuperNext}>
          {'\u00BB'}
        </button>
      )}
    </div>
  );
}

export default Header;
