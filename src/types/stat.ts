export type Stat = {
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  date: string;
  duration_min: number;
  feeling_calm: number;
  feeling_relax: number;
  feeling_focus: number;
  feeling_anxiety: number;
};

export type StatResponse = {
  data: {
    stat: Stat;
  };
  message: string;
  status: string;
};

export type StatsSummary = {
  total_minutes: number;
  total_calm: number;
  total_relax: number;
  total_focus: number;
  total_anxiety: number;
};

export type StatsResponse = {
  data: {
    stats: Stat[];
    summary: StatsSummary;
  };
  status: string;
};
