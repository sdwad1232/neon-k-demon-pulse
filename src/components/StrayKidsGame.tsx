import { useState, useEffect } from "react";
import { Shuffle, Trophy, RotateCcw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const StrayKidsGame = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const strayKidsMembers = [
    {
      name: "Bang Chan",
      role: "Leader, Producer, Vocalist, Rapper",
      fact: "From Australia, speaks English fluently",
      color: "text-stray-kids-red"
    },
    {
      name: "Lee Know",
      role: "Main Dancer, Vocalist, Rapper",
      fact: "Former backup dancer, loves cats",
      color: "text-neon-cyan"
    },
    {
      name: "Changbin",
      role: "Main Rapper, Vocalist, Producer",
      fact: "Part of 3RACHA production unit",
      color: "text-neon-purple"
    },
    {
      name: "Hyunjin",
      role: "Main Dancer, Rapper, Vocalist, Visual",
      fact: "Known for his artistic talents and visuals",
      color: "text-blackpink-pink"
    },
    {
      name: "Han",
      role: "Main Rapper, Vocalist, Producer", 
      fact: "Part of 3RACHA, multi-talented producer",
      color: "text-neon-green"
    },
    {
      name: "Felix",
      role: "Lead Dancer, Rapper, Vocalist",
      fact: "From Australia, famous deep voice",
      color: "text-neon-orange"
    },
    {
      name: "Seungmin",
      role: "Main Vocalist",
      fact: "Main vocalist with perfect pitch",
      color: "text-demon-gold"
    },
    {
      name: "I.N",
      role: "Vocalist, Maknae",
      fact: "Youngest member, amazing vocals",
      color: "text-primary"
    }
  ];

  const gameQuestions = [
    {
      question: "Who is the leader of Stray Kids?",
      options: ["Bang Chan", "Lee Know", "Changbin", "Hyunjin"],
      correct: "Bang Chan",
      explanation: "Bang Chan is the leader and oldest member of Stray Kids!"
    },
    {
      question: "Which members are part of the 3RACHA production unit?",
      options: ["Bang Chan, Lee Know, Felix", "Bang Chan, Changbin, Han", "Hyunjin, Felix, I.N", "Lee Know, Seungmin, I.N"],
      correct: "Bang Chan, Changbin, Han",
      explanation: "3RACHA consists of Bang Chan, Changbin, and Han - the main producers!"
    },
    {
      question: "Who is known for having a famously deep voice?",
      options: ["Seungmin", "I.N", "Felix", "Lee Know"],
      correct: "Felix",
      explanation: "Felix is famous for his surprisingly deep voice that contrasts with his appearance!"
    },
    {
      question: "Who is the main dancer of Stray Kids?",
      options: ["Hyunjin", "Lee Know", "Felix", "Bang Chan"],
      correct: "Lee Know",
      explanation: "Lee Know is the main dancer and was a backup dancer before joining Stray Kids!"
    },
    {
      question: "Which member is the maknae (youngest)?",
      options: ["Felix", "Seungmin", "I.N", "Hyunjin"],
      correct: "I.N",
      explanation: "I.N is the youngest member and maknae of Stray Kids!"
    }
  ];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === gameQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < gameQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameFinished(true);
    }
  };

  const resetGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameFinished(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / gameQuestions.length) * 100;
    if (percentage === 100) return "Perfect STAY! You know everything! 🏆";
    if (percentage >= 80) return "Amazing STAY! You're a true fan! ⭐";
    if (percentage >= 60) return "Good STAY! Keep learning about the boys! 💪";
    return "New STAY? Time to dive deeper into Stray Kids! 🌟";
  };

  if (gameFinished) {
    return (
      <section id="music" className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-glow-stray-kids mb-4">
            Stray Kids Fan Challenge
          </h2>
          <p className="text-muted-foreground text-lg">
            Test your knowledge about the amazing 8-member group!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glow-stray-kids bg-card/80 backdrop-blur-sm border-2 border-stray-kids-red/50 animate-fade-in">
            <CardContent className="p-8 text-center">
              <Trophy className="w-16 h-16 mx-auto mb-6 text-stray-kids-red animate-pulse" />
              <h3 className="font-orbitron text-3xl font-bold text-glow-stray-kids mb-4">
                Game Complete!
              </h3>
              <div className="text-6xl font-bold text-stray-kids-red mb-4">
                {score}/{gameQuestions.length}
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                {getScoreMessage()}
              </p>
              <Button 
                onClick={resetGame}
                className="bg-gradient-stray-kids glow-stray-kids font-semibold text-lg px-8 py-4"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Play Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const question = gameQuestions[currentQuestion];

  return (
    <section id="music" className="container mx-auto px-4 lg:px-6">
      <div className="text-center mb-12">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-glow-stray-kids mb-4">
          Stray Kids Fan Challenge
        </h2>
        <p className="text-muted-foreground text-lg">
          Test your knowledge about the amazing 8-member group!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {gameQuestions.length}
            </span>
            <Badge variant="secondary" className="bg-stray-kids-red text-white">
              Score: {score}
            </Badge>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-gradient-stray-kids h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / gameQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="glow-stray-kids bg-card/80 backdrop-blur-sm border-2 border-stray-kids-red/50 animate-fade-in mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-glow-stray-kids">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => !showResult && handleAnswerSelect(option)}
                disabled={showResult}
                className={`w-full p-4 text-left justify-start h-auto transition-all duration-300 ${
                  showResult 
                    ? option === question.correct 
                      ? 'bg-neon-green/20 border-neon-green text-neon-green' 
                      : option === selectedAnswer 
                        ? 'bg-destructive/20 border-destructive text-destructive'
                        : 'opacity-50'
                    : 'hover:bg-stray-kids-red/10 hover:border-stray-kids-red/50'
                }`}
              >
                <span className="text-lg">{option}</span>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Result & Next Button */}
        {showResult && (
          <Card className="bg-card/80 backdrop-blur-sm border border-border animate-slide-in-left">
            <CardContent className="p-6 text-center">
              <div className={`text-xl font-semibold mb-2 ${
                selectedAnswer === question.correct ? 'text-neon-green' : 'text-destructive'
              }`}>
                {selectedAnswer === question.correct ? '🎉 Correct!' : '❌ Wrong!'}
              </div>
              <p className="text-muted-foreground mb-4">
                {question.explanation}
              </p>
              <Button 
                onClick={nextQuestion}
                className="bg-gradient-stray-kids glow-stray-kids font-semibold"
              >
                {currentQuestion < gameQuestions.length - 1 ? 'Next Question' : 'Finish Game'}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Member Info Display */}
        <div className="mt-12">
          <h3 className="font-orbitron text-2xl font-bold text-center mb-8 text-glow-neon">
            Meet Stray Kids
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {strayKidsMembers.map((member, index) => (
              <Card key={index} className="bg-card/60 backdrop-blur-sm border-border hover:glow-neon transition-all duration-300 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 text-center">
                  <h4 className={`font-semibold text-lg mb-2 ${member.color}`}>
                    {member.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {member.fact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrayKidsGame;