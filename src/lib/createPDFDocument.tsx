import React, { ReactElement } from "react";
import type { DocumentProps } from "@react-pdf/renderer";
import TodayPDF from "@/components/pdfs/TodayPDF";
import WeekPDF from "@/components/pdfs/WeekPDF";
import WaitingPDF from "@/components/pdfs/WaitingPDF";
import NotesPDF from "@/components/pdfs/NotesPDF";
import DecisionPDF from "@/components/pdfs/DecisionPDF";
import AdminPDF from "@/components/pdfs/AdminPDF";

export function createPDFDocument(
  slug: string,
  values: Record<string, string | boolean>
): ReactElement<DocumentProps> | null {
  const v = values;

  switch (slug) {
    case "today":
      return (
        <TodayPDF
          title={v.title as string}
          date={v.date as string}
          fontSize={v.fontSize as string}
          showPriorities={v.showPriorities as boolean}
          showSchedule={v.showSchedule as boolean}
          showNotes={v.showNotes as boolean}
        />
      );
    case "week":
      return (
        <WeekPDF
          title={v.title as string}
          date={v.date as string}
          startDay={v.startDay as string}
          fontSize={v.fontSize as string}
          showGoals={v.showGoals as boolean}
        />
      );
    case "waiting":
      return (
        <WaitingPDF
          title={v.title as string}
          date={v.date as string}
          fontSize={v.fontSize as string}
          showNotes={v.showNotes as boolean}
        />
      );
    case "notes":
      return (
        <NotesPDF
          title={v.title as string}
          date={v.date as string}
          lineStyle={v.lineStyle as string}
          fontSize={v.fontSize as string}
        />
      );
    case "decision":
      return (
        <DecisionPDF
          title={v.title as string}
          date={v.date as string}
          fontSize={v.fontSize as string}
          showFactors={v.showFactors as boolean}
          showConclusion={v.showConclusion as boolean}
        />
      );
    case "admin":
      return (
        <AdminPDF
          title={v.title as string}
          date={v.date as string}
          fontSize={v.fontSize as string}
          showCategories={v.showCategories as boolean}
          showNotes={v.showNotes as boolean}
        />
      );
    default:
      return null;
  }
}
