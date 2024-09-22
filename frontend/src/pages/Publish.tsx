import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Appbar } from "../components/Appbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export const Publish: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handlePublish = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content: description,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.error("Error publishing post:", error);
      // Add error handling here if needed
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Appbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto bg-gray-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold text-green-400">
              <Lightbulb className="h-6 w-6" />
              Share Your Insight
            </CardTitle>
          </CardHeader>
          <CardContent>
            
            <Input
              type="text"
              placeholder="Title of your insight"
              className="mb-4 bg-gray-700 text-white border border-gray-600 placeholder-gray-400"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <TextEditor
              value={description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.target.value)
              }
            />
            <Button
              onClick={handlePublish}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Publish Insight
            </Button>
            <Button
              onClick={() => navigate(-1)} // Go back to the previous page
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

interface TextEditorProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  return (
    <Textarea
      placeholder="Write your insight here..."
      className="min-h-[200px] resize-y bg-gray-700 text-white border border-gray-600 placeholder-gray-400"
      value={value}
      onChange={onChange}
    />
  );
};
