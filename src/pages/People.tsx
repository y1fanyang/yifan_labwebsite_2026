import React, { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { people, sortPeople, roleOrder } from "@/data/people";
import FadeInSection from "@/components/FadeInSection";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface PersonCardProps {
  name: string;
  nameCn?: string;
  roleLabel: string;
  image: string;
  bio: string;
  email?: string;
  onOpen: () => void;
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  nameCn,
  roleLabel,
  image,
  bio,
  email,
  onOpen,
}) => {
  const [failed, setFailed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (non-secure context) — mailto link is the fallback
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      className="group w-full text-left cursor-pointer"
      aria-label={`View ${name}'s profile`}
    >
      {/* Square photo with hover overlay */}
      <div
        className="relative aspect-square w-full overflow-hidden"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        {!failed && (
          <img
            src={image}
            alt={name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {failed && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-3xl font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}

        {/* Bio overlay, scrollable for long intros */}
        <div className="absolute inset-0 flex flex-col gap-2 overflow-y-auto p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/70 text-white">
          <div>
            <p className="text-sm font-semibold leading-snug">{name}</p>
            <p className="text-xs font-medium uppercase tracking-wider opacity-80">
              {roleLabel}
            </p>
          </div>
          <p className="text-xs leading-relaxed whitespace-pre-line">
            {bio}
          </p>
        </div>
      </div>

      {/* Name + role below the photo */}
      <div className="mt-3">
        <span
          className="block text-base font-medium leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {name}
          {nameCn && (
            <span
              className="ml-1 font-normal"
              style={{ color: "var(--text-muted)" }}
            >
              {nameCn}
            </span>
          )}
        </span>
        <div className="flex items-center gap-1.5">
          <span
            className="text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            {roleLabel}
          </span>

          {email && (
            <Popover>
              <PopoverTrigger
                asChild
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
              >
                <span
                  role="button"
                  tabIndex={0}
                  aria-label={`Email ${name}`}
                  className="inline-flex size-6 items-center justify-center rounded-md transition-colors hover:bg-accent"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Mail size={14} />
                </span>
              </PopoverTrigger>

              <PopoverContent
                align="start"
                sideOffset={4}
                className="w-auto min-w-56 p-3"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="min-w-0 flex-1 break-all text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {email}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyEmail}
                      aria-label={`Copy ${email} to clipboard`}
                      className="shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check className="size-3.5" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="size-3.5" /> Copy
                        </>
                      )}
                    </Button>
                  </div>

                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-1.5 text-sm no-underline transition-colors hover:opacity-80"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    <Mail size={14} /> Open in email app
                  </a>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

const People: React.FC = () => {
  const sortedPeople = sortPeople(people);
  const [selected, setSelected] = useState<(typeof sortedPeople)[number] | null>(
    null
  );

  const groupedByRole = sortedPeople.reduce<
    Record<string, typeof sortedPeople>
  >((acc, person) => {
    if (!acc[person.role]) acc[person.role] = [];
    acc[person.role].push(person);
    return acc;
  }, {});

  const roleLabels: Record<string, string> = {
    pi: "Principal Investigator",
    assistant: "Assistant Research Fellows",
    phd: "PhD Students",
    postdoc: "Postdoctoral Researchers",
    staff: "Staff",
    visitor: "Visitors",
    alumni: "Alumni",
  };

  const activeRoles = roleOrder.filter(
    (role) => groupedByRole[role]?.length > 0
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl">
              <p
                className="text-sm font-medium uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Team
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl mb-6"
                style={{ letterSpacing: "-0.015em" }}
              >
                People
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Meet the researchers and staff who make our work possible.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* People by role */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {activeRoles.map((role) => (
            <div key={role} className="mb-16 last:mb-0">
              <FadeInSection>
                <h2
                  className="text-xl mb-8 pb-2"
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {roleLabels[role] || role}
                </h2>
              </FadeInSection>

              <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {groupedByRole[role].map((person, index) => (
                  <FadeInSection key={person.id} delay={index * 0.08}>
                    <PersonCard
                      name={person.name}
                      nameCn={person.nameCn}
                      roleLabel={person.roleLabel}
                      image={person.image}
                      bio={person.bio}
                      email={person.email}
                      onOpen={() => setSelected(person)}
                    />
                  </FadeInSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Profile dialog */}
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  {selected.image && (
                    <div
                      className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg"
                      style={{
                        backgroundColor: "var(--color-accent)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <img
                        src={selected.image}
                        alt={selected.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <DialogTitle className="text-xl">
                      {selected.name}
                      {selected.nameCn && (
                        <span
                          className="ml-1 text-base font-normal"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {selected.nameCn}
                        </span>
                      )}
                    </DialogTitle>
                    <DialogDescription>
                      {selected.roleLabel}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <p
                className="text-sm leading-relaxed whitespace-pre-line"
                style={{ color: "var(--text-secondary)" }}
              >
                {selected.bio}
              </p>

              {selected.email && (
                <a
                  href={`mailto:${selected.email}`}
                  className="inline-flex items-center gap-1.5 text-sm no-underline transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--color-secondary)" }}
                >
                  <Mail size={14} />
                  {selected.email}
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default People;
