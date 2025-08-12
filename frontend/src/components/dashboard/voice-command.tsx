"use client";
import { useState } from "react";
import { Mic, Send, Bot, Loader, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { handleVoiceCommand } from "@/lib/client";
import { useToast } from "@/hooks/use-toast";

type Result = {
  type?: string;
  data?: any;
  error?: string;
  details?: string;
} | null;

export function VoiceCommand() {
  const [command, setCommand] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Result>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    setIsLoading(true);
    setResult(null);

    const res:any = await handleVoiceCommand(command);

    if (res.error) {
      toast({
        variant: "destructive",
        title: "Error processing command",
        description: res.details || res.error,
      });
      setResult(res);
    } else {
      toast({
        title: "Command Processed!",
        description: `Intent "${res.type}" recognized successfully.`,
      });
      setResult(res);
    }

    setIsLoading(false);
    setCommand("");
  };

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="text-primary" />
          <span>AI Command Center</span>
        </CardTitle>
        <CardDescription>
          Use your voice or text to manage your business. Try "Add 10 Parle-G
          biscuits to stock" or "Record sale of 5 Amul Milk".
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="relative">
            <Textarea
              placeholder="e.g. '5 lays chips ka sale record karo...'"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              rows={3}
              className="pr-20"
              disabled={isLoading}
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2"
              type="button"
              disabled
            >
              <Mic />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={isLoading || !command.trim()}>
            {isLoading ? (
              <>
                <Loader className="animate-spin mr-2" />
                Processing...
              </>
            ) : (
              <>
                <Send className="mr-2" />
                Send Command
              </>
            )}
          </Button>
        </CardFooter>
      </form>
      {result && (
        <CardContent>
          <h4 className="font-semibold mb-2">Result:</h4>
          {result.error ? (
            <div className="text-destructive flex items-start gap-2 rounded-md border border-destructive/50 p-3 text-sm">
              <AlertCircle className="mt-0.5 size-4 shrink-0" />
              <div>
                <p className="font-semibold">{result.error}</p>
                {result.details && (
                  <p className="text-xs">{result.details}</p>
                )}
              </div>
            </div>
          ) : (
            <pre className="bg-muted p-3 rounded-md text-xs overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </CardContent>
      )}
    </Card>
  );
}
