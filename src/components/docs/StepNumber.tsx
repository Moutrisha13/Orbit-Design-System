interface StepNumberProps {
  n: number;
}

export default function StepNumber({ n }: StepNumberProps) {
  return (
    <div style={{
      width: 28,
      height: 28,
      borderRadius: '50%',
      backgroundColor: '#068ae9',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 700,
      flexShrink: 0,
    }}>
      {n}
    </div>
  );
}
